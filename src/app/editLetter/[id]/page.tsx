"use client"
import EditLetterForm from "@/components/forms/EditLetterForm"
import useLetter from "@/hooks/useLetter"
import { useNotification } from "@/hooks/useNotification"
import useSessionId from "@/hooks/useSessionId"

export default function EditLetter({ params: { id } }: any) {
  const { letter, isLoading, isError } = useLetter({ id })
  const sessionId = useSessionId()
  const notification = useNotification()

  if (isLoading) return <></>
  if (isError) return <div>Error loading letter</div>

  const { title, description, content } = letter
  if (sessionId !== letter.authorId) {
    return notification("error", "You're not the author of this letter.", "/")
  }

  return (
    <EditLetterForm
      id={id}
      title={title}
      description={description}
      content={content}
    />
  )
}
