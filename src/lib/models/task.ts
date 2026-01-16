import mongoose, { model, models, Schema } from "mongoose"



export interface ITask {
    _id?: string
    title: string
    slug: string
    description: string
    createdAt: Date
    deadline: Date
    priority: string
    createdBy: mongoose.Types.ObjectId
    status: string
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    status: { type: String, enum: ['pending', 'completed', 'canceled', 'expired'], default: 'pending' },
    deadline: { type: Date, required: true },
    createdBy: { type: mongoose.Types.ObjectId, required: true, ref: 'user' }
})

const Task = models.tasks || model('tasks', taskSchema)
export default Task