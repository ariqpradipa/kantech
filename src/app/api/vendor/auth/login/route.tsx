import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { email, password }: any = await req.json();

        if (!email || !password) {

            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });

        }

        // Check if the vendor with the provided email exists
        const vendor: any = await prisma.vendor.findUnique({

            where: { email },

        });

        if (!vendor) {

            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });

        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, vendor.password);

        if (!passwordMatch) {

            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });

        }

        // Generate a JWT token
        const token = jwt.sign({
            id: vendor.id,
            email: vendor.email,
            role: vendor.role,
            provider: vendor.provider,
            name: vendor?.name,
            photo_url: vendor?.photo_url
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

        console.error('Error handling login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
