import { NextResponse } from 'next/server';

export async function GET() {

    try {

        const cookieOptions: any = [
            `jwt=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`,
            process.env.NODE_ENV === 'production' ? 'Secure' : '', // Set to 'Secure' in production for HTTPS
        ];

        return NextResponse.json(null, { headers: { 'Set-Cookie': cookieOptions } });

    } catch (error) {

        console.error("Failed to logout ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}