'use client'

import { ITask } from "@/lib/models/task"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import DeleteTask from "../button/DeleteTask"

const AllTask = () => {
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get('/api/task', { withCredentials: true })
                setTasks(response.data.payload)
            } catch (error: any) {
                setTasks([])
                console.log(error)

            }
        }
        fetchTask()
    },[])

    if (tasks.length < 1) {
        return <p>No data found </p>
    }


    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl font-semibold text-center">History</h1>
            {
                tasks.map((task) => (
                    <div key={task._id} className="w-full bg-white flex flex-col md:flex-row items-start md:items-stretch justify-between gap-4 p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">

                        <div className="flex-1 flex flex-col gap-3">
                            <div className='w-full flex items-center justify-between'>
                                <Link href={`/task/${task._id}`} className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                                    {task.title}
                                </Link>
                                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${task?.priority === 'low' ? 'bg-amber-100 text-amber-700' :
                                        task?.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                                            'bg-red-100 text-red-700'
                                    }`}>
                                    {task?.priority}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                                {
                                    task?.status==='pending'? <span className="text-red-400">Please complete in {task?.deadline.slice(0,10)}</span>: task?.status==='canceled'? <span className="text-red-600">Deadline over</span>: <span className="text-green-400">{task?.status}</span>
                                }
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Description</p>
                                <p className='text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 italic'>
                                    {task?.description || "No description provided."}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center justify-center gap-3 pt-4 md:pt-0 md:pl-6 border-t md:border-t-0 md:border-l border-slate-100">
                            <DeleteTask id={task._id} />
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default AllTask
