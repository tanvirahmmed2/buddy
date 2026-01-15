import connectDB from "@/lib/database/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(req: Request) {
    try {
        await connectDB()
        const { email, password, name } = await req.json()
        if (!email || !password || !name) {
            return NextResponse.json({
                success: false, message: 'Please fill all information'
            }, { status: 400 })
        }
        if (password.length < 6) {
            return NextResponse.json({
                success: false, message: 'Password must conatain atleast 6 characters'
            }, { status: 400 })
        }

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                success: false,
                message: 'User already exists'
            }, { status: 400 })
        }
        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = new User({ email, name, password: hashedPass })
        await newUser.save()

        return NextResponse.json({
            success: true, message: 'Successfully registered'
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}


export async function GET() {
    try {
        await connectDB()
        const users= await User.find({}).sort({createdAt: -1})
        if(!users || users.length<1){
            return NextResponse.json({
                success:false, message:'No user found'
            },{status:400})
        }

        return NextResponse.json({
            success:true, message:'Successfully fetched users data', payload:users
        },{status:200})
    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}