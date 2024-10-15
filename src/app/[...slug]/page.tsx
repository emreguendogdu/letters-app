import { redirect } from "next/navigation"

export default function CatchAllPage() {
  redirect("/")
  return null // Or a loader, if desired
}
