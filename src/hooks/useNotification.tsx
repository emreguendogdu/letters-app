import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const notificationStyle = {
  style: {
    border: "1px solid mediumpurple",
    padding: "16px",
    color: "black",
  },
  iconTheme: {
    primary: "mediumpurple",
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

    setTimeout(() => {
      route ? router.push(route) : router.refresh()
    }, 400)
  }

  return notification
}
