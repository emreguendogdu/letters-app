"use client"

import Markdown from "markdown-to-jsx"
import "@/app/styles/markdown-styles.css"
import { convertDate } from "@/utils/utils"
import "@/app/styles/skeleton.css"
import { ChevronLeft } from "./icons"
import { useRouter } from "next/navigation"

export default function Letter({ letter }: any) {
  const router = useRouter()

  return (
    <article className="relative w-full mb-4 max-w-3xl container break-words min-h-screen">
      <div
        className="absolute top-0 left-0 text-3xl cursor-pointer"
        onClick={() => {
          router.back()
        }}
      >
        <ChevronLeft />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="mb-6 flex gap-2 flex-col">
          <div className="mb-4 font-light flex gap-2">
            <time>{convertDate(letter.createdAt)}</time>
          </div>
          <div>
            <h1 className="text-4xl inline-block font-extrabold capitalize after:border after:border-cyan-800 after:block after:mt-2">
              {letter.title}
            </h1>
          </div>
        </div>
        <Markdown className="markdown text-xl">{letter.content}</Markdown>
      </div>
    </article>
  )
}

export const SkeletonLetter = () => {
  return (
    <article className="mb-4 max-w-3xl min-h-screen container mx-auto break-words">
      <div className="mb-6 flex gap-2 flex-col">
        <div id="links"></div>
        <div className="mb-4 font-light flex gap-2 *:flex-1">
          <p className="skeleton max-h-6">Lorem ipsum dolor sit amet.</p>
          <span className="skeleton max-h-6">Osman Gundogdu</span>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>
          <h1 className="text-4xl inline-block font-extrabold capitalize after:border after:border-cyan-800 after:block skeleton skeleton-title">
            Lorem, ipsum dolor.
          </h1>
        </div>
      </div>
      <div className="markdown text-xl skeleton skeleton-text">
        Lorem ipsum dolor sit amet.
      </div>
      <div className="skeleton skeleton-text mb-8" />
      <div className="skeleton skeleton-text mb-8" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
    </article>
  )
}
