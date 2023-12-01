import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req.body);
        const body = await req.body.json(); // Use req.body.json() to parse the JSON body
        const { email, password } = body;

        if (!email || !password) {
            return res.status(400).json({ error: "Missing email or password" });
        }

        // convert password to hash
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: 'customer',
                provider: 'kantech.vercel.app'
            }
        });

        res.json(result);

    } catch (error) {

        console.error('Error handling create user:', error);

        return res.status(500).json({ error: 'Internal Server Error' });

    } finally {

        await prisma.$disconnect();

    }
}