import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { title, description, letter } = await req.json()
  await connectMongoDB()
  await Letter.create({title, description, letter})
  return NextResponse.json({ message: "Letter created", status: 201 })
}

export async function GET() {
  await connectMongoDB()
  const letters = await Letter.find()
  return NextResponse.json({ letters })
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id")
  await connectMongoDB()
  if (id !== null) {
    await Letter.findByIdAndDelete(id)
  } else {
    await Letter.deleteMany()
  }
  return NextResponse.json({ message: "Letter deleted", status: 200 })
}

// export const dynamic = "force-static"
