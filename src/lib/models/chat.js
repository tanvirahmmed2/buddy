import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const Chat= mongoose.models.chats || mongoose.model("chats", ChatSchema);
export default Chat
