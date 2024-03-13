"use client"

import { LetterPreview } from "./LetterPreview"
import { getLetters } from "@/utils/letters"
import useSWR from "swr"

const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())

export default function LettersList() {
  const { data, error, isLoading } = useSWR(`/api/letters`, fetcher)
  let letters = data?.letters

  // reverse the letters so the latest letter is on top
  letters = letters?.reverse()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading letters</div>
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
