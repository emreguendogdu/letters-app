import connectMongoDB from "@/libs/mongodb"
import { NextResponse } from "next/server"
import User from "@/models/user"

export async function POST(req) {
  try {
    await connectMongoDB()

    const { email } = await req.json()
    const user = await User.findOne({ email }).select("_id")

    return NextResponse.json({ user })
  } catch (err) {
    throw new Error(err)
  }
}
