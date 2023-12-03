import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {

        // Check if the user with the provided email exists
        const vendors: any = await prisma.vendor.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                rating: true,
                photo_url: true,
            }
        })

        return NextResponse.json(vendors, { status: 200 });

    } catch (error) {

        console.error("Failed to get vendor list ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    } finally {

        await prisma.$disconnect();

    }
}
