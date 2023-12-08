import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { vendor_id, order_id, status } = await req.json()

        const order = await prisma.order.update({
            where: {
                id: order_id,
                vendor_id,
            },
            data: {
                status,
            }
        })

        return NextResponse.json(order, { status: 200 });

    } catch (error) {

        console.error("Failed to update your data ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
