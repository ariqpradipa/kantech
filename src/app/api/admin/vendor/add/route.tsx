import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {

        const { email, password, name, description }: any = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // let token: any = cookies().get("jwt")
        // token = token.value.replace(/^Bearer\s+/i, '')
        // const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)
        // const role = jwt_payload.role

        // if (role !== "admin") {
        //     return NextResponse.json({ error: 'You are not authorized to create a vendor' }, { status: 401 });
        // }

        // convert password to hash
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await prisma.vendor.create({
            data: {
                email,
                password: hashedPassword,
                name,
                description
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