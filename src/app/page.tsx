"use client"

import useLetters from "@/hooks/useLetters"
import { LetterPreview, LetterSkeleton } from "@/components/LetterPreview"
import "@/app/styles/skeleton.css"

export default function Home() {
  let { letters, isError, isLoading } = useLetters()

  if (isError) return <div>Error loading letters</div>
  if (letters?.length < 1) return <div>No letters yet. Create one now!</div>

  return (
    <div className="flex flex-wrap box-border max-[768px]:flex-col">
      {isLoading
        ? Array.from({ length: 6 }, (_, i) => <LetterSkeleton key={i} />)
        : letters?.map((letter: any) => {
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
  )
}
