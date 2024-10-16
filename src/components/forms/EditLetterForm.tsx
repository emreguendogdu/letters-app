"use client"

import { useState } from "react"
import { Form, Input, LetterTextArea } from "./Form"
import { useHandleSuccess } from "@/hooks/useHandleSuccess"

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
  const { handleSuccess } = useHandleSuccess()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/letters/${id}`, {
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
      handleSuccess(`/letters/${id}`, "Letter updated successfully")
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
      <button className="button">Update Letter</button>
    </Form>
  )
}
