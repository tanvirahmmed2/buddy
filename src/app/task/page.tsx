'use client'

import AddTaskForm from "@/component/forms/AddTaskForm"
import PendingTasks from "@/component/pages/PendingTasks"
const TaskPage = () => {
  return (
    <div className='w-full flex flex-col gap-4 min-h-screen p-4'>

      <AddTaskForm />
      <PendingTasks />
    </div>
  )
}

export default TaskPage
