import connectDB from "@/lib/database/db";
import { isLogin } from "@/lib/helper/middleware";
import Task from "@/lib/models/task";
import { NextResponse } from "next/server";



export async function PUT(req:Request) {
    try {
        await connectDB()
        const auth= await isLogin()
        if(!auth.success){
            return NextResponse.json({
                success:false, message: auth.message
            },{status:400})
        }
        const {id, status}=await req.json()
        if(!id || !status){
            return NextResponse.json({
                success:false, message:'Information not found'
            },{status:400})
        }
        const task= await Task.findById(id)
        if(!task){
            return NextResponse.json({
                success:false, message:'Task not found'
            },{status:400})
        }

        await Task.findOneAndUpdate({_id: id, createdBy: auth.payload._id}, {status}, {new:true})
        return NextResponse.json({
            success:true, message:'Successfully updated task'
        }, {status:200})

        
    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}