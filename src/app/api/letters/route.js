import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function GET() {
  await connectMongoDB()
  const letters = await Letter.find({})
    .select("title description content authorId createdAt") // Only select needed fields
    .sort({ createdAt: -1 })
    .lean()
    .exec()

  return NextResponse.json({ letters })
}

export async function POST(req) {
  const { title, description, content, authorId } = await req.json()

  await connectMongoDB()
  await Letter.create({ title, description, content, authorId })
  return NextResponse.json({ message: "Letter created", status: 201 })
}
