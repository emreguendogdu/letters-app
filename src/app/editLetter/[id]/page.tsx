"use client"
import EditLetterForm from "@/components/forms/EditLetterForm"
import useLetter from "@/hooks/useLetter"

export default function EditLetter({ params: { id } }: any) {
  const { letter, isLoading, isError } = useLetter({ id })
  if (isLoading) return <></>
  if (isError) return <div>Error loading letter</div>
  const { title, description, letter: letterMessage } = letter
  return (
    <EditLetterForm
      id={id}
      title={title}
      description={description}
      letter={letterMessage}
    />
  )
}
