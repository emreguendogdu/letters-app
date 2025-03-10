import Link from "next/link"
import RemoveBtn from "./forms/RemoveBtn"
import { EditIcon } from "@/components/icons"
import { convertDate } from "@/utils/utils"

type LetterProps = {
  letter: {
    _id: string
    authorId: string
    title: string
    description: string
    createdAt: string
  }
  sessionId: any
}

export const LetterPreview = ({ letter, sessionId }: LetterProps) => {
  const { _id, authorId, title, description, createdAt } = letter

  return (
    <article className="pr-4 mb-24 flex flex-col max-h-fit justify-between gap-2 items-start w-1/3 max-[768px]:p-0 max-[768px]:w-full max-[768px]:mb-5">
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
          <p className="text-xs mt-2">{convertDate(createdAt)}</p>
        </div>
      </div>
      {sessionId && sessionId === authorId && (
        <div className="flex gap-2">
          <RemoveBtn id={_id} />
          <Link href={`/editLetter/${_id}`} aria-label="Edit letter">
            <EditIcon aria-hidden />
          </Link>
        </div>
      )}
    </article>
  )
}

export const LetterSkeleton = () => {
  return (
    <article className="pr-4 mb-10 flex flex-col justify-between gap-2 items-start w-1/3 max-[768px]:p-0 max-[768px]:w-full max-[768px]:mb-5">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-extrabold text-2xl  bg-gradient-to-b from-black to-blue-300 bg-clip-text text-transparent skeleton skeleton-title">
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
        </div>
      </div>
    </article>
  )
}
