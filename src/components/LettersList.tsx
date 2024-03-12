import { LetterPreview } from "./LetterPreview"
import { getLetters } from "@/utils/letters"

export default async function LettersList() {
  let { letters } = await getLetters()

  // reverse the letters so the latest letter is on top
  letters = letters?.reverse()

  return (
    <>
      <div className="flex flex-wrap box-border max-[768px]:flex-col">
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
          : "No letters yet, create one by clicking New Letter button above."}
      </div>
    </>
  )
}
