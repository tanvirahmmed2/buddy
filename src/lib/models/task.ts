import { model, models, Schema } from "mongoose"



export interface ITask {
    _id?: string
    title: string
    description: string
    createdAt: Date
    finishedAt: Date
    priority: string
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    priority: { type: String, enum: ['low', 'medium', 'low'], default: 'low' },
    finishedAt: { type: Date, required: true }
})

const Task = models.tasks || model('tasks', taskSchema)
export default Task