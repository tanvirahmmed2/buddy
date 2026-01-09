import ConnectDB from "@/lib/database/db";
import { isLogin } from "@/lib/middleware/authentication";
import Chat from "@/models/Chat";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const auth = await isLogin();
    if (!auth.success) {
      return NextResponse.json(
        {
          success: false,
          message: auth.message,
        },
        { status: 401 }
      );
    }

    const { otherUserId } = await req.json();

    if (!otherUserId) {
      return NextResponse.json(
        {
          success: false,
          message: "Other user id is required",
        },
        { status: 400 }
      );
    }

    const userId = auth.payload._id;

    const existingChat = await Chat.findOne({
      isGroup: false,
      members: { $all: [userId, otherUserId] },
    }).populate("members", "name email");

    if (existingChat) {
      return NextResponse.json({
        success: true,
        chat: existingChat,
      });
    }

    const newChat = await Chat.create({
      members: [userId, otherUserId],
      isGroup: false,
    });

    const fullChat = await Chat.findById(newChat._id).populate(
      "members",
      "name email"
    );

    return NextResponse.json({
      success: true,
      chat: fullChat,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
