import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
}, { timestamps: true });

const Message= mongoose.models.messages || mongoose.model("messages", MessageSchema);
export default Message
