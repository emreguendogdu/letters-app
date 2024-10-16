import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
  try {
    const { id } = params
    const { title, description, letter } = await req.json()
    await connectMongoDB()
    await Letter.findByIdAndUpdate(id, { title, description, letter })

    revalidatePath(`/letters/${id}`)
    return NextResponse.json({ message: "Letter updated" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating letter", error: error.message },
      { status: 500 }
    )
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params

    await connectMongoDB()
    const letter = await Letter.findById(id)
    return NextResponse.json({ letter }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching letter", error: error.message },
      { status: 500 }
    )
  }
}
