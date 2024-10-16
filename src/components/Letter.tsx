import Markdown from "markdown-to-jsx"
import "@/app/styles/markdown-styles.css"
import { convertDate } from "@/utils/utils"
import "@/app/styles/skeleton.css"

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

export default function Letter({ letter }: any) {
  return (
    <article className="mb-4 max-w-3xl container mx-auto break-words min-h-screen">
      <div className="mb-6 flex gap-2 flex-col">
        <div id="links"></div>
        <div className="mb-4 font-light flex gap-2">
          <time>{convertDate(letter.createdAt)}</time>
          <span className={`border-l border-black`} />
          <span>Osman Gundogdu</span>
        </div>
        <div>
          <h1 className="text-4xl inline-block font-extrabold capitalize after:border after:border-cyan-800 after:block after:mt-2">
            {letter.title}
          </h1>
        </div>
      </div>
      <Markdown className="markdown text-xl">{letter.letter}</Markdown>
    </article>
  )
}
