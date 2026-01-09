import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true },
    password: { type: String, required: true, trim: true },
    role:{ type: String, enum :['user', 'admin'], default:'user'},
    isBanned:{type:Boolean, default:false}
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User