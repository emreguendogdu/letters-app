import Markdown from "markdown-to-jsx"
import "@/app/styles/markdown-styles.css"

export default function Letter({ letter }: any) {
  return (
    <article className="mb-4 mt-10 max-w-3xl min-h-96 container ml-auto mr-auto text-center break-words">
      <h1 className="text-4xl font-bold capitalize mb-4 mt-2">
        {letter.title}
      </h1>
      <Markdown className="markdown">{letter.letter}</Markdown>
    </article>
  )
}
