import connectMongoDB from "@/libs/mongodb"
import { NextResponse } from "next/server"
import User from "@/models/user"
import bcrypt from "bcrypt"

export const POST = async (req) => {
  const { username, email, password } = await req.json()

  await connectMongoDB()

  const hashedPassword = await bcrypt.hash(password, 5)

  const newUser = {
    username,
    email,
    password: hashedPassword,
  }

  try {
    await User.create(newUser)
  } catch (err) {
    return new NextResponse(`Error creating user: ${err.message}`, {
      status: 500,
    })
  }

  return new NextResponse("User has been created", { status: 201 })
}
