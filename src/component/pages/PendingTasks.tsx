'use client'
import React, { useContext } from 'react'
import DeleteTask from '../button/DeleteTask'
import CompleteTask from '../button/CompleteTask'
import CancelTask from '../button/CancelTask'
import { Context } from '../context/Context'
import Link from 'next/link'

const PendingTasks = () => {
    const {pendingTasks}= useContext(Context)

  return (
    <div className='w-full'>
      
      {
        pendingTasks === null ? <div className="w-full h-auto flex items-center justify-center p-1">
          <p>No Task Found</p>
        </div> :
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold text-center">Pending Tasks</h1>
            {
              pendingTasks.map((task: any) => (
                <div key={task._id} className="w-full flex flex-col md:flex-row items-center justify-center gap-2 p-2 border rounded-lg shadow">
                  <div className="w-full flex flex-col ">
                    <Link href={`/task/${task._id}`} className="text-xl font-semibold">{task.title}</Link>
                    <div className="w-full flex flex-row gap-3">
                      <p className="px-3 rounded-lg bg-yellow-400 text-white">{task.status}</p>
                      <p>Deadline: {task.deadline.slice(0, 10)}</p>
                    </div>
                    <p>Details: {task.description}</p>
                  </div>
                  <div className="w-auto flex flex-row md:flex-col items-center justify-between">
                    <DeleteTask id={task._id}/>
                    <CompleteTask id={task._id}/>
                    <CancelTask id={task._id}/>
                  </div>
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}

export default PendingTasks
