import Markdown from "markdown-to-jsx"
import "@/app/styles/markdown-styles.css"
import { convertDate } from "@/utils/letters"

export default function Letter({ letter }: any) {
  return (
    <article className="mb-4 mt-10 max-w-3xl min-h-96 container ml-auto mr-auto break-words">
      <div className="mb-4 mt-2">
        <div id="links"></div>
        <div className="mb-4 mt-2 font-light flex gap-2">
          <time>{convertDate(letter.createdAt)}</time>
          <span className="border-l border-black" />
          <span>Osman Gundogdu</span>
        </div>
        <h1 className="text-4xl inline-block font-extrabold capitalize after:border after:border-yellow-400 after:block">
          {letter.title}
        </h1>
      </div>
      <Markdown className="markdown">{letter.letter}</Markdown>
    </article>
  )
}
