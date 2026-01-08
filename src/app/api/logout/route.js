import { NextResponse } from "next/server";


export async function GET() {
    try {
        const res = NextResponse.json({
            success: true,
            message: "Logout successful",
        });


        res.cookies.set("user_token", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/",
        });

        return res;
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })

    }

}