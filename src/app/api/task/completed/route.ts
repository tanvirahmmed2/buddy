import connectDB from "@/lib/database/db"
import { isLogin } from "@/lib/helper/middleware"
import Task from "@/lib/models/task"
import { NextResponse } from "next/server"



export async function GET() {
    try {
        await connectDB()

        const auth= await isLogin()
        if(!auth.success){
            return NextResponse.json({
                success:false, message:auth.message
            },{status:400})
        }

        const tasks= await Task.find({createdBy: auth.payload._id, status:'completed'}).sort({createdAt:-1})

        if(!tasks || tasks.length<1){
            return NextResponse.json({
                success:false, message:'No task found'
            },{status:400})
        }
        return NextResponse.json({
            success:true, message:'Successfully fetched task data', payload:tasks
        },{status:200})
    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}
