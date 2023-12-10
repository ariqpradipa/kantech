import { NextResponse } from 'next/server';
import { cookies } from "next/headers";

import jwt from "jsonwebtoken"
import prisma from '@/lib/prisma';

export async function GET() {
    try {

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)

        if (jwt_payload.role !== 'vendor') {

            return NextResponse.json({ error: 'Only vendors can get menu' }, { status: 401 });

        }

        const vendor_id = jwt_payload.id

        const menus: any = await prisma.menu.findMany({
            where: {
                vendor_id,
            },
        })

        return NextResponse.json(menus, { status: 200 });

    } catch (error) {

        console.error("Failed to get menu list ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
