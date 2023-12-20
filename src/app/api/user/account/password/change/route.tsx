import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { oldPassword, newPassword }: any = await req.json();

        if (!oldPassword || !newPassword) {

            return NextResponse.json({ error: 'oldPassword and newPassword required' }, { status: 400 });

        }

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)
        const customer_id = jwt_payload.id

        // Check if the user with the provided email exists
        const user: any = await prisma.user.findUnique({

            where: { id: customer_id },

        });

        console.log(user)

        if (!user) {

            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });

        }

        if (user.provider !== 'kantech.vercel.app') {

            return NextResponse.json({ error: 'You are logged in using SSO, change password on the provider page' }, { status: 401 });

        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);

        if (!passwordMatch) {

            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });

        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        console.log(hashedPassword)

        // Update the user with the new hashed password
        const updatedPassword = await prisma.user.update({

            where: { id: customer_id },
            data: { password: hashedPassword },

        });

        return NextResponse.json(updatedPassword, { status: 200 });

    } catch (error) {

        console.error('Error handling change password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}