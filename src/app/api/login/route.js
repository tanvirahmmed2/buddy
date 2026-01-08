import ConnectDB from "@/lib/database/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, NODE_ENV } from "@/lib/database/secret";

export async function POST(req) {
    try {
        await ConnectDB()

        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({
                success: false, message: 'Please provide email & password'
            }, { status: 400 })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User not found'
            }, { status: 400 })
        }

        const isMatchPass = await bcrypt.compare(password, user.password)

        if (!isMatchPass) {
            return NextResponse.json({
                success: false, message: 'Incorrect password'
            }, { status: 400 })
        }
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "2d" })
        const response = NextResponse.json(
            {
                success: true,
                message: "Successfully logged in",
                payload: user,
            },
            { status: 200 }
        );

        response.cookies.set("user_token", token, {
            httpOnly: true,
            secure: NODE_ENV,
            path: "/",
            maxAge: 60 * 60 * 24 * 2,
        });

        return response;

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })

    }

}