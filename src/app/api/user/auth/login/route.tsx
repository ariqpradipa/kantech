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

        // Check if the user with the provided email exists
        const user: any = await prisma.user.findUnique({

            where: { email },

        });

        if (!user) {

            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });

        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {

            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });

        }

        // Generate a JWT token
        const token = jwt.sign({
            userId: user.id,
            email: user.email,
            role: user.role,
            provider: user.provider,
            name: user?.name,
            photo_url: user?.photo_url
        }, process.env.JWT_SECRET, {

            expiresIn: '30d', // Token expiration time

        });

        // Return the token in the response
        // return NextResponse.json({ token }, { status: 200 });

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
