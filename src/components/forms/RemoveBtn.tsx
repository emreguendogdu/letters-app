import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

export default function RemoveBtn({
  id,
  removeAll = false,
}: {
  id: string
  removeAll?: boolean
}) {
  const router = useRouter()
  const actionText = removeAll ? "all letters" : "this letter"

  const removePath = removeAll
    ? "/api/letters"
    : `/api/letters?id=${id}`

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
      className="button !bg-white !text-red-500 !px-0 !py-0 !border-0"
      aria-label={`Remove ${actionText}`}
    >
      <HiOutlineTrash size={24} aria-hidden />
    </button>
  )
}
