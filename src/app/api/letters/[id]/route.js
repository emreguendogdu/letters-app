import connectMongoDB from "@/libs/mongodb"
import Letter from "@/models/letter"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

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

export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    const existingLetter = await Letter.findById(id)
    if (!existingLetter) {
      return NextResponse.json({ message: "Letter not found" }, { status: 404 })
    }

    if (existingLetter.authorId.toString() !== session.user.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    const { updatedTitle, updatedDescription, updatedContent } = await req.json()

    await connectMongoDB()
    await Letter.findByIdAndUpdate(id, {
      title: updatedTitle,
      description: updatedDescription,
      content: updatedContent,
    })

    revalidatePath(`/letters/${id}`)
    return NextResponse.json({ message: "Letter updated" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating letter", error: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    await connectMongoDB()

    const existingLetter = await Letter.findById(id)
    if (!existingLetter) {
      return NextResponse.json({ message: "Letter not found" }, { status: 404 })
    }

    if (existingLetter.authorId.toString() !== session.user.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    await Letter.findByIdAndDelete(id)

    revalidatePath("/")
    return NextResponse.json({ message: "Letter(s) deleted" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting letters", error: error.message },
      { status: 500 }
    )
  }
}
