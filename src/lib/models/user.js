import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true },
    password: { type: String, required: true, trim: true },
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User