import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import connectDB from "@/lib/database/db";
import User from "@/lib/models/user";


export async function POST(req: Request) {
    try {
        await connectDB()

        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({
                success: false, message: 'Please fill all information'
            }, { status: 400 })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({
                success: false, message: 'User not found'
            }, { status: 400 })
        }
        const passMatch = await bcrypt.compare(password, user.password)
        if (!passMatch) {
            return NextResponse.json({
                success: false, message: 'Incorrect password'
            }, { status: 400 })
        }

        const response = NextResponse.json({
            success: true, message: 'Login successfull'
        }, { status: 200 })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '7d' })

        response.cookies.set({
            name: "user_token",
            value: token,
            httpOnly: true,
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })

        return response

    } catch (error: any) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}
