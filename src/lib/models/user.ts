import { model, models, Schema } from "mongoose"


export interface IUser {
    _id?: string
    name: string,
    email: string
    password: string
    phone: string
    createdAt: Date
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
})

const User = models.users || model('users', userSchema)

export default User