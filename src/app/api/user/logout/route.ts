import connectDB from "@/lib/database/db";
import { isLogin } from "@/lib/helper/middleware";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB()
        const auth = await isLogin()
        if (!auth.success) {
            return NextResponse.json({
                success: false, message: auth.message
            }, { status: 400 })
        }

        const response = NextResponse.json({
            success: true, message: 'Successfully logged out'
        }, { status: 200 })

        response.cookies.set('user_token', '', {
            httpOnly: true,
            expires: new Date(0),
            path: '/'
        })
        return response
    } catch (error: any) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}