import Markdown from "markdown-to-jsx"
import "@/app/styles/markdown-styles.css"
import { convertDate } from "@/utils/letters"

export default function Letter({ letter }: any) {
  return (
    <article className="mb-4 mt-10 max-w-3xl min-h-96 container ml-auto mr-auto break-words">
      <div className="mb-6 mt-2 flex gap-2 flex-col">
        <div id="links"></div>
        <div className="mb-4 mt-2 font-light flex gap-2">
          <time>{convertDate(letter.createdAt)}</time>
          <span className={`border-l border-black`} />
          <span>Osman Gundogdu</span>
        </div>
        <div>
          <h1 className="text-4xl inline-block font-extrabold capitalize after:border after:border-cyan-800 after:block">
            {letter.title}
          </h1>
        </div>
      </div>
      <Markdown className="markdown text-xl">{letter.letter}</Markdown>
    </article>
  )
}
