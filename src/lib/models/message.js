import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({

  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },

  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  text: {
    type: String,
    required: true,
    trim: true,
  },
},
  { timestamps: true }
);

const Message = mongoose.models.messages || mongoose.model("messages", MessageSchema);
export default Message
