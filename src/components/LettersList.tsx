import { LetterPreview } from "./LetterPreview"
import { getLetters } from "@/utils/letters"

export default async function LettersList() {
  const { letters } = await getLetters()

  return (
    <>
      <div className="flex flex-wrap box-border">
        {letters.length > 0
          ? letters?.map((letter: any) => {
              return (
                <LetterPreview
                  key={letter._id}
                  title={letter.title}
                  description={letter.description}
                  createdAt={letter.createdAt}
                  _id={letter._id}
                />
              )
            })
          : "There are no letters yet..."}
      </div>
    </>
  )
}
