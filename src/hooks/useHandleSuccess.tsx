// hooks/useHandleSuccess.ts

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function useHandleSuccess() {
  const router = useRouter()

  const handleSuccess = (route?: string, message: string = "Success") => {
    toast.success(message, {
      style: {
        border: "1px solid mediumpurple",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "mediumpurple",
        secondary: "#FFFAEE",
      },
    })

    if (route) {
      setTimeout(() => {
        router.push(route) // Navigate to a new route
      }, 400)
    } else {
      setTimeout(() => {
        router.refresh() // Refresh the current page
      }, 400)
    }
  }

  return { handleSuccess }
}
