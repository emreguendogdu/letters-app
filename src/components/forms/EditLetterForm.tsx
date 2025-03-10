"use client"

import { useState } from "react"
import { Form, Input, LetterTextArea } from "./Form"
import { useNotification } from "@/hooks/useNotification"

type EditLetterFormProps = {
  id: string
  title: string
  description: string
  content: string
}

export default function EditLetterForm({
  id,
  title,
  description,
  content,
}: EditLetterFormProps) {
  const [updatedTitle, setUpdatedTitle] = useState(title)
  const [updatedDescription, setUpdatedDescription] = useState(description)
  const [updatedContent, setUpdatedContent] = useState(content)
  const notification = useNotification()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/letters/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updatedTitle,
          updatedDescription,
          updatedContent,
        }),
      })

      if (res.ok) {
        return notification(
          "success",
          "Letter updated successfully",
          `/letters/${id}`
        )
      } else {
        return notification("error", "Letter couldn't update.", `/`)
      }
    } catch (err: any) {
      throw new Error(err)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <Input
        name="description"
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
      />
      <LetterTextArea
        name="content"
        value={updatedContent}
        onChange={(e) => setUpdatedContent(e.target.value)}
      />
      <button className="button">Update Letter</button>
    </Form>
  )
}
