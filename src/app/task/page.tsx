'use client'

import { Context } from "@/component/context/Context"
import AddTaskForm from "@/component/forms/AddTaskForm"
import Link from "next/link"
import { useContext } from "react"

const TaskPage = () => {
  const { tasks } = useContext(Context)
  return (
    <div className='w-full flex flex-col gap-4 min-h-screen p-4'>

      <AddTaskForm />

      {
        tasks === null ? <div className="w-full h-auto flex items-center justify-center p-1">
          <p>No Task Found</p>
        </div> :
          <div>
            {
              tasks.map((task: any) => (
                <div key={task._id}>
                  <Link href={`/task/${task._id}`}>{task.title}</Link>
                  <div>
                    <p>{task.status}</p>
                    <p>Deadline :{task.deadline.slice(0, 10)}</p>
                  </div>
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}

export default TaskPage
