import { useRouter } from "next/navigation"
import { DeleteIcon } from "@/components/icons"

export default function RemoveBtn({
  id,
  removeAll = false,
}: {
  id: string
  removeAll?: boolean
}) {
  const router = useRouter()
  const actionText = removeAll ? "all letters" : "this letter"

  const removePath = removeAll ? "/api/letters" : `/api/letters?id=${id}`

  const removeLetter = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${actionText}?`)

    if (confirmed) {
      const res = await fetch(removePath, {
        method: "DELETE",
      })

      if (!res.ok) return console.error(`Error while deleting`)
    }
  }
  return (
    <button
      onClick={() => removeLetter()}
      className="button !bg-white !px-0 !py-0 !border-0"
      aria-label={`Remove ${actionText}`}
    >
      <DeleteIcon />
    </button>
  )
}
