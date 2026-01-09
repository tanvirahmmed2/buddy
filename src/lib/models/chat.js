import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    isGroup: {
      type: Boolean,
      default: false,
    },

    groupName: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);


const Chat= mongoose.models.chats || mongoose.model("chats", ChatSchema);
export default Chat
