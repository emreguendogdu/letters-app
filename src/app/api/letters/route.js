import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function GET() {
  await connectMongoDB()
  const letters = await Letter.find({})
    .select("title description content authorId createdAt") // Only select needed fields
    .sort({ createdAt: -1 })
    .lean()
    // .limit(100)
    .exec()

  const headers = new Headers({
    "Cache-Control":
      process.env.NODE_ENV === "development"
        ? "no-store, no-cache, must-revalidate, proxy-revalidate"
        : "public, max-age=31536000, immutable",
  })

  return NextResponse.json({ letters }, { headers })
}

export async function POST(req) {
  const { title, description, content, authorId } = await req.json()
  await connectMongoDB()
  await Letter.create({ title, description, content, authorId })
  return NextResponse.json({ message: "Letter created", status: 201 })
}
