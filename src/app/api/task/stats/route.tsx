import connectDB from "@/lib/database/db"
import { isLogin } from "@/lib/helper/middleware"
import Task from "@/lib/models/task"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()

        const auth = await isLogin()
        if (!auth.success) {
            return NextResponse.json({ success: false, message: auth.message }, { status: 400 })
        }

        const tasks = await Task.find({ createdBy: auth.payload._id })

        const now = Date.now()
        
        const stats = {
            pending: 0,
            completed: 0,
            expired: 0
        }

        tasks.forEach(task => {
            const isExpired = now > new Date(task.deadline).getTime()
            
            if (task.status === 'completed') {
                stats.completed++
            } else if (isExpired) {
                stats.expired++
            } else {
                stats.pending++
            }
        })

        return NextResponse.json({
            success: true,
            payload: stats
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}