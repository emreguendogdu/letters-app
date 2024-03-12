import Link from "next/link"
import RemoveBtn from "./forms/RemoveBtn"
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
    <article className="pr-4 my-10 flex flex-col justify-between gap-2 items-start w-1/3 max-[768px]:p-0 max-[768px]:w-full max-[768px]:my-5">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-extrabold text-2xl">
            <Link href={`/letters/${_id}`}>{title}</Link>
          </h2>
        </div>
        <div className="min-h-16">
          <p className="text-lg bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent">
            {description}
          </p>
        </div>
        <div>
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
