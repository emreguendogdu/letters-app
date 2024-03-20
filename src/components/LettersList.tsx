"use client"
import useLetters from "@/hooks/useLetters"
import { LetterPreview, LetterSkeleton } from "./LetterPreview"
import "@/app/styles/skeleton.css"

export default function LettersList() {
  let { letters, isError, isLoading } = useLetters()

  if (isLoading)
    return Array.from({ length: 6 }, (_, i) => <LetterSkeleton key={i} />)

  if (isError) return <div>Error loading letters</div>
  if (letters?.length < 1) return <div>No letters yet.</div>

  return (
    <>
      {letters?.map((letter: any) => {
        return (
          <LetterPreview
            key={letter._id}
            title={letter.title}
            description={letter.description}
            createdAt={letter.createdAt}
            _id={letter._id}
          />
        )
      })}
    </>
  )
}
