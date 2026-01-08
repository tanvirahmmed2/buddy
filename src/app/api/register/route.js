import ConnectDB from "@/lib/database/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'



export async function POST(req) {
    try {
        await ConnectDB()

        const { name, email, password } = await req.json()
        if (!name || !email || !password) {
            return NextResponse.json({
                success: false, message: 'Please fill all data'
            }, { status: 400 })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return NextResponse.json({
                success: false,
                message: 'User already exists'
            }, { status: 400 })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = new User({ name, email, password: hashedPass })

        await newUser.save()

        return NextResponse.json({
            success: true,
            message: 'Successfully registered'
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}