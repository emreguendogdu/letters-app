import MarkdownIt from "markdown-it"
import MarkdownItTaskLists from "markdown-it-task-lists"
import MarkdownItAttrs from "markdown-it-attrs"

import { useEffect } from "react"
import "@/app/styles/markdown-styles.css"

export default function MarkdownPreview({ letter }: { letter: string }) {
  useEffect(() => {
    const md = new MarkdownIt()
    md.use(MarkdownItAttrs)
    md.use(MarkdownItTaskLists)
    const preview = document.getElementById("preview")
    if (preview) {
      preview.innerHTML = md.render(letter)
    }
  }, [letter])

  return (
    <div>
      <div id="preview" className="markdown" />
    </div>
  )
}
