import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

import jwt from "jsonwebtoken"

export async function GET() {
    try {

        let token: any = cookies().get("jwt")
        token = token.value.replace(/^Bearer\s+/i, '')
        const jwt_payload: any = jwt.verify(token, process.env.JWT_SECRET)

        return NextResponse.json(jwt_payload.role, { status: 200 });

    } catch (error) {

        console.error("Failed to verify JWT ", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}