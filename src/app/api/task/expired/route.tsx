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

        const tasks= await Task.find({createdBy: auth.payload._id})

        if(!tasks || tasks.length<1){
            return NextResponse.json({
                success:false, message:'No task found'
            },{status:400})
        }
        
        const expiredTasks= tasks.filter((task)=> Date.now() > new Date(task.deadline).getTime() )
        if(!expiredTasks){
            return NextResponse.json({
                success:false, message:'No expired task found'
            },{status:400})
        }
        return NextResponse.json({
            success:true, message:'Successfully fetched expired task data', payload:expiredTasks
        },{status:200})
    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}
