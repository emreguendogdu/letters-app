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
          <h2 className="font-extrabold text-2xl  bg-gradient-to-b from-black to-blue-300 bg-clip-text text-transparent">
            <Link href={`/letters/${_id}`}>{title}</Link>
          </h2>
        </div>
        <div className="min-h-16">
          <p className="text-lg">{description}</p>
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

export const LetterSkeleton = () => {
  return (
    <article className="pr-4 my-10 flex flex-col justify-between gap-2 items-start w-1/3 max-[768px]:p-0 max-[768px]:w-full max-[768px]:my-5">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-extrabold text-2xl  bg-gradient-to-b from-black to-blue-300 bg-clip-text text-transparent skeleton skeleton-title">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            voluptates!
          </h2>
        </div>
        <div className="min-h-16">
          <p className="skeleton skeleton-text" />
          <p className="skeleton skeleton-text" />
          <p className="skeleton skeleton-text" />
        </div>
        <div>
          <p className="max-w-20 mt-6 skeleton skeleton-text" />
          <p className="max-w-16 mt-2 skeleton skeleton-text" />
          <div className="flex gap-2">
            <p className="max-w-6 min-h-6 mt-2 skeleton skeleton-text" />
            <p className="max-w-6 min-h-6 mt-2 skeleton skeleton-text" />
          </div>
        </div>
      </div>
    </article>
  )
}
