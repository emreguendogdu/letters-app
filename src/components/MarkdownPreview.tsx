import MarkdownIt from "markdown-it"
import MarkdownItTaskLists from "markdown-it-task-lists"
import MarkdownItAttrs from "markdown-it-attrs"

import { useEffect } from "react"
import "@/app/styles/markdown-styles.css"

export default function MarkdownPreview({ content }: { content: string }) {
  useEffect(() => {
    const md = new MarkdownIt()
    md.use(MarkdownItAttrs)
    md.use(MarkdownItTaskLists)
    const preview = document.getElementById("preview")
    if (preview) {
      preview.innerHTML = md.render(content)
    }
  }, [content])

  return (
    <div>
      <div id="preview" className="markdown" />
    </div>
  )
}
