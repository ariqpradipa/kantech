import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

async function authenticateUser(username: string, password: string) {
    // let db = null;

    // // Check if the database instance has been initialized
    // if (!db) {
    //     // If the database instance is not initialized, open the database connection
    //     db = await open({
    //         filename: "userdatabase.db", // Specify the database file path
    //         driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    //     });
    // }

    // const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    // const user = await db.get(sql, username, password);

    return { id: 20 };
}

export async function POST(req: any) {
    const body = await req.json();
    const { username, password } = body;

    // Perform user authentication here against your database or authentication service
    const user = await authenticateUser(username, password);
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1m",
    });
    return NextResponse.json({ token });
}