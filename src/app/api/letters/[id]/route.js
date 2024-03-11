import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { NextResponse } from "next/server"
export async function PUT(req, { params }) {
  const { id } = params
  const { title, description, letter } = await req.json()
  await connectMongoDB()
  await Letter.findByIdAndUpdate(id, { title, description, letter })
  console.log(title, description, letter)
  return NextResponse.json({ message: "Letter updated" }, { status: 200 })
}

export async function GET(req, { params }) {
  const { id } = params

  await connectMongoDB()
  const letter = await Letter.findById(id)
  return NextResponse.json({ letter }, { status: 200 })
}
