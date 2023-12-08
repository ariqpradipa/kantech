import { NextRequest, NextResponse } from 'next/server';
import xml2js from "xml2js";
import jwt from 'jsonwebtoken';

import faculty_information from "@/lib/faculty-information.json";

import prisma from '@/lib/prisma';

async function verifySSOTicket({ ticket, service }: { ticket: string, service: string }) {

    const url = `https://sso.ui.ac.id/cas2/serviceValidate?ticket=${ticket}&service=${service}`;
    console.log(url);
    try {

        const response = await fetch(url, {
            method: "GET",
        })

        if (!response.ok) {

            throw new Error(`Error fetching data: ${response.status}`);

        }

        const data = await response.text();
        const parsedResponse = await xml2js.parseStringPromise(data, { explicitArray: false });

        const {
            "cas:serviceResponse": {
                "cas:authenticationSuccess": {
                    "cas:attributes": attributes, "cas:user": user }
            }
        } = parsedResponse;

        const {
            "cas:npm": npm,
            "cas:nama": display_name,
            "cas:kd_org": kd_org
        } = attributes;

        const email = `${user}@ui.ac.id`;
        const provider = "sso.ui.ac.id";

        // Assuming `faculty_information` is imported and `kd_org` is a string
        const facultyData = faculty_information[kd_org as keyof typeof faculty_information];

        const faculty = facultyData ? facultyData.faculty : undefined;
        const study_program = facultyData ? facultyData.study_program : undefined;


        return { npm, display_name, email, provider, faculty, study_program };

    } catch (error) {

        console.error('Error verifying SSO ticket:', error);
        throw error;

    }
}

export async function GET(req: NextRequest) {

    try {

        const ticket = req.nextUrl.searchParams.get('ticket');
        const service = req.nextUrl.searchParams.get('service');

        if (!ticket || !service) {

            return NextResponse.json({ error: 'Ticket and service are required' }, { status: 400 });

        }

        console.log(ticket, service);

        const verifiedTicket = await verifySSOTicket({ ticket, service });

        // create user if not exists and if it exist then fetch the data

        const user = await prisma.user.upsert({
            where: { email: verifiedTicket.email },
            update: {},
            create: {
                email: verifiedTicket.email,
                name: verifiedTicket.display_name,
                npm: verifiedTicket.npm,
                provider: verifiedTicket.provider,
                faculty: verifiedTicket.faculty,
                study_program: verifiedTicket.study_program,
            },
        });

        // Generate a JWT token
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role,
            provider: user.provider,
            name: user?.name,
            photo_url: user?.photo_url
        }, process.env.JWT_SECRET, {

            expiresIn: '30d', // Token expiration time

        });

        // Set the token as a cookie
        const cookieOptions: any = [
            `jwt=Bearer ${token}; Path=/; HttpOnly; Max-Age=${30 * 24 * 60 * 60}; SameSite=Strict`,
            process.env.NODE_ENV === 'production' ? 'Secure' : '', // Set to 'Secure' in production for HTTPS
        ];

        return NextResponse.json({ token }, { headers: { 'Set-Cookie': cookieOptions } });

    } catch (error) {

        console.error('Error handling POST request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}
