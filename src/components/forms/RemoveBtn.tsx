"use client"

import { DeleteIcon } from "@/components/icons"
import { useNotification } from "@/hooks/useNotification"

export default function RemoveBtn({ id }: { id: string; removeAll?: boolean }) {
  const notification = useNotification()

  const removeLetter = async () => {
    const confirmed = confirm("Are you sure you want to delete this letter?")

    if (confirmed) {
      const res = await fetch(`/api/letters/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) return notification("error", "You're not authorized.")

      return notification(
        "success",
        "Letter deleted. (It may take a couple of seconds)"
      )
    }
  }
  return (
    <button
      onClick={() => removeLetter()}
      className="button !bg-white !px-0 !py-0 !border-0 !text-black"
      aria-label="Remove this letter"
    >
      <DeleteIcon />
    </button>
  )
}
