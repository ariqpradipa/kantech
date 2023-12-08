import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import jwt from "jsonwebtoken"
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { id, rating, review } = await req.json()

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)
        const customer_id = jwt_payload.id

        const history = await prisma.order.update({
            where: {
                id,
                customer_id,
            },
            data: {
                rating,
                review,
            }
        })

        return NextResponse.json(history, { status: 200 });

    } catch (error) {

        console.error("Failed to update your history ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
