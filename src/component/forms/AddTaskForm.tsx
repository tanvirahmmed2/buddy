'use client'

import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../context/Context"

const AddTaskForm = () => {
    const {fetchPendingTask}= useContext(Context)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: '',
        deadline: ''
    })

    const changeHandler = (e: any) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const submitTask = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/task', formData, { withCredentials: true })
            alert(response.data.message)
            fetchPendingTask()
        } catch (error: any) {
            console.log(error)
            alert(error?.response?.data?.message || "Failed to add task")

        }
    }
    return (
        <form onSubmit={submitTask} className="w-full flex flex-col items-center justify-center gap-2 ">
            <div className="w-full flex flex-col  gap-1">
                <label htmlFor="title">Title</label>
                <input type="text" required name="title" id="title" value={formData.title} onChange={changeHandler} className="w-full px-3 p-1 border outline-none" />
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="priority">Priority</label>
                    <select name="priority" id="priority" value={formData.priority} required onChange={changeHandler} className="w-full px-3 p-1 border outline-none">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="date" required name="deadline" id="deadline" value={formData.deadline} onChange={changeHandler} className="w-full px-3 p-1 border outline-none" />
                </div>
            </div>

            <div className="w-full flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <textarea required name="description" id="description" value={formData.description} onChange={changeHandler} className="w-full px-3 p-1 border outline-none" />
            </div>
            <button type="submit" className="bg-black p-1 px-4 rounded-lg text-white hover:bg-black/60 cursor-pointer">Submit</button>
        </form>
    )
}

export default AddTaskForm
