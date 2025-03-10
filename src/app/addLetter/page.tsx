"use client"

import { Form, Input, LetterTextArea } from "@/components/forms/Form"
import { useNotification } from "@/hooks/useNotification"
import { useState } from "react"
import useSessionId from "@/hooks/useSessionId"

export default function AddLetter() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const notification = useNotification()

  const authorId = useSessionId()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!authorId) return notification("error", "You must log in.")

    try {
      const res = await fetch("/api/letters", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, description, authorId }),
      })

      if (res.ok) {
        return notification("success", "Letter added succesfully!", "/")
      } else {
        throw new Error("Error adding letter")
      }
    } catch (err: any) {
      throw new Error("Error adding new letter: ", err)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <LetterTextArea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button">Add Letter</button>
    </Form>
  )
}
