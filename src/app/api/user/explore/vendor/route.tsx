import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {

        const { vendor_id }: any = req.json();

        const menus: any = await prisma.menu.findMany({
            where: {
                vendor_id,
            },
            select: {
                id: true,
                vendor_id: true,
                name: true,
                description: true,
                price: true,
                rating: true,
                photo_url: true,
                vendor: {
                    select: {
                        name: true,
                        rating: true,
                    }
                }
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