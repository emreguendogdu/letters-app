"use client"

import { fetchLettersPath } from "@/utils/letters"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { handleSuccess } from "./handleSuccess"
import { Form, Input, LetterTextArea } from "./Form"
import Button from "./Button"

type EditLetterFormProps = {
  id: string
  title: string
  description: string
  letter: string
}

export default function EditLetterForm({
  id,
  title,
  description,
  letter,
}: EditLetterFormProps) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const [newLetter, setNewLetter] = useState(letter)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`${fetchLettersPath}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          letter: newLetter,
        }),
      })

      if (!res.ok) throw new Error("Error updating letter")
      handleSuccess(router, "Updated letter successfully")
      router.push(`/letters/${id}`)
    } catch (err) {
      console.log("Error updating letter: ", err)
    }
  }

  return (
    <Form onSubmit={handleSubmit} letter={newLetter}>
      <Input
        name="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <Input
        name="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <LetterTextArea
        name="letter"
        value={newLetter}
        onChange={(e) => setNewLetter(e.target.value)}
      />
      <Button>Update Letter</Button>
    </Form>
  )
}
