import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { title, description, letter } = await req.json()
  await connectMongoDB()
  await Letter.create({ title, description, letter })
  return NextResponse.json({ message: "Letter created", status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const letters = await Letter.find({})
    .select("title description letter createdAt") // Only select needed fields
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

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id")
  await connectMongoDB()

  try {
    if (id) {
      await Letter.findByIdAndDelete(id)
    } else {
      await Letter.bulkWrite([{ deleteMany: {} }])
    }
  } catch (error) {
    return NextResponse.json({ message: "Error deleting letters", status: 500 })
  }
}
