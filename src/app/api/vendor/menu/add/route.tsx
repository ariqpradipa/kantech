import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import jwt from "jsonwebtoken"
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { name, description, price, photo_url }: any = await req.json()

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)

        if (jwt_payload.role !== 'vendor') {

            return NextResponse.json({ error: 'Only vendors can add menu' }, { status: 401 });

        }

        const vendor_id = jwt_payload.id

        const menu = await prisma.menu.create({
            data: {
                name,
                description,
                price,
                photo_url,
                vendor_id
            }
        })

        return NextResponse.json(menu, { status: 200 });

    } catch (error) {

        console.error("Failed to add new menu ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}