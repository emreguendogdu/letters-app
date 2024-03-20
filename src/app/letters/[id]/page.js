"use client"
import useLetter from "@/hooks/useLetter"
import Letter from "@/components/Letter"

export default function LetterPage({ params: { id } }) {
  const { letter, isLoading, isError } = useLetter({ id })
  if (isLoading) return <></>
  if (isError) return <div>Error loading letter</div>

  return <Letter letter={letter} />
}
