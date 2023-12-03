import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import jwt from "jsonwebtoken"
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)
        const customer_id = jwt_payload.id

        const order = await prisma.order.findMany({
            where: {
                customer_id,
                status: {
                    not: {
                        in: ["complete"]
                    }
                },
            },
            select: {
                id: true,
                note: true,
                status: true,
                vendor: {
                    select: {
                        name: true,
                    }
                },
                menu: {
                    select: {
                        name: true,
                        photo_url: true,
                    }
                },
                createdAt: true,
            },
            orderBy: {
                createdAt: 'asc', // or 'desc' for descending order
            },
        })

        return NextResponse.json(order, { status: 200 });

    } catch (error) {

        console.error("Failed to find your order ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
