"use client"
import useLetters from "@/hooks/useLetters"
import { LetterPreview } from "./LetterPreview"

export default function LettersList() {
  let { letters, isError, isLoading } = useLetters()
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading letters</div>
  if (letters?.length < 1) return <div>No letters yet.</div>

  return (
    <>
      <div className="flex flex-wrap box-border max-[768px]:flex-col">
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
      </div>
    </>
  )
}
