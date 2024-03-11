import MarkdownIt from "markdown-it"
import { useEffect } from "react"
import "@/app/styles/markdown-styles.css"

export default function HandlePreview({ letter }: { letter: string }) {
  useEffect(() => {
    const md = new MarkdownIt()
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
