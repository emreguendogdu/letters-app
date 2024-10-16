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
  const letters = await Letter.find().sort({ createdAt: -1 }).lean().exec()
  return NextResponse.json({ letters })
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id")
  await connectMongoDB()

  try {
    if (id) {
      await Letter.findByIdAndDelete(id)
    } else {
      await Letter.bulkWrite([{ deleteMany: { filter: {} } }])
    }

    revalidatePath("/")
    redirect("/")
  } catch (error) {
    return NextResponse.json({ message: "Error deleting letters", status: 500 })
  }
}
