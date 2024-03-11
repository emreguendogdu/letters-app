import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"
import { convertDate } from "@/utils/letters"

type LetterProps = {
  title: string
  description: string
  _id: string
  createdAt: string
}

export const LetterPreview = ({
  title,
  _id,
  createdAt,
  description,
}: LetterProps) => {
  createdAt = convertDate(createdAt)

  return (
    <article className="p-4 my-6 flex justify-between gap-6 items-start w-1/3">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-extrabold text-2xl ">{title}</h2>
        </div>
        <div className="min-h-16">
          <p className="text-lg">{description}</p>
        </div>
        <div className="">
          <Link href={`/letters/${_id}`} className="italic underline">
            Read more...
          </Link>
          <p className="text-xs mt-2">{createdAt}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn id={_id} />
        <Link href={`/editLetter/${_id}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </article>
  )
}
