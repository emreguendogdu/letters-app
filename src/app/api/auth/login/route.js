import connectMongoDB from "@/libs/mongodb"
import { NextResponse } from "next/server"
import User from "@/models/user"

export const POST = async (req) => {
  const { username, email, password } = await req.json()

}
