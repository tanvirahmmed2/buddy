import connectDB from "@/lib/database/db";
import { isLogin } from "@/lib/helper/middleware";
import Task from "@/lib/models/task";
import { NextResponse } from "next/server";
import slugify from "slugify";


export async function POST(req:Request) {
    try {
        await connectDB()
        const auth= await isLogin()
        if(!auth.success){
            return NextResponse.json({
                success:false, message: auth.message
            },{status:400})
        }
        const {title, description, deadline, priority }= await req.json()

        if(!title || !deadline){
            return NextResponse.json({
                success:false, message:'Please fill all information'
            },{status:400})
        }

        if(new Date(deadline).getTime() < Date.now()){
            return NextResponse.json({
                success:false, message:'Please enter a valid date'
            }, {status:400})
        }
        const slug= slugify(title)

      const newTask= new Task({
        title, description, slug, priority, createdBy: auth.payload._id, deadline

      })

       await newTask.save()
       return NextResponse.json({
        success:true, message:'Successfully added task'
       },{status:200})


    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}

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
        return NextResponse.json({
            success:true, message:'Successfully fetched task data', payload:tasks
        },{status:200})
    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}


export async function DELETE(req:Request) {
    try {
        await connectDB()

        const {id}= await req.json()
        if(!id){
            return NextResponse.json({
                success:false, message:'Id not found'
            },{status:400})
        }

        const task= await Task.findById(id)
        if(!task){
            return NextResponse.json({
                success:false, message:'Task not found'
            },{status:400})
        }
        await Task.findByIdAndDelete(id)
        return NextResponse.json({
            success:true, message:'Successfully deleted task'
        }, {status:200})

    } catch (error:any) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}