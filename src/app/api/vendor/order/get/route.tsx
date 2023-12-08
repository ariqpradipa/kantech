import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { vendor_id } = await req.json()

        const order = await prisma.order.findMany({
            where: {
                vendor_id,
                status: {
                    not: {
                        in: ["pickup", "complete"]
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