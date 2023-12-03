import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {

        const { email, password }: any = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // convert password to hash
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: 'customer',
                provider: 'kantech.vercel.app'
            }
        });

        return NextResponse.json({ result: result }, { status: 200 });

    } catch (error: any) {

        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {

            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });

        }

        console.error('Error handling create user:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}