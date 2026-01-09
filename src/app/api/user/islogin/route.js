import ConnectDB from "@/lib/database/db";
import { isLogin } from "@/lib/middleware/authentication";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {

    try {
        await ConnectDB()

        const auth = await isLogin()
        if (!auth.success) {
            return NextResponse.json({
                success: false, message: auth.message
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            message: 'User logged in',
            ppayload: auth.payload
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })

    }
}