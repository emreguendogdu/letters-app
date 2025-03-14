import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const notificationStyle = {
  style: {
    border: "1px solid #84B2E5",
    padding: "16px",
    color: "black",
  },
  iconTheme: {
    primary: "#84B2E5",
    secondary: "#FFFAEE",
  },
}

export function useNotification() {
  const router = useRouter()

  const notification = (type: string, message: string, route?: string) => {
    if (type === "success") {
      toast.success(message, notificationStyle)
    } else if (type === "error") {
      toast.error(message, notificationStyle)
    } else {
      throw new Error("Toast notification type should be success or error.")
    }

    if (route === "none") return

    setTimeout(() => {
      route ? router.push(route) : router.refresh()
    }, 500)
  }

  return notification
}
