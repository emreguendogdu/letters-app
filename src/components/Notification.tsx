import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface NotificationProps {
  type: string
  message: string
  route: string
}

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

export default function Notification({
  type,
  message,
  route,
}: NotificationProps) {
  const router = useRouter()

  const notification = () => {
    if (type === "success") {
      toast.success(message, notificationStyle)
    } else if (type === "error") {
      toast.error(message, notificationStyle)
    } else {
      throw new Error("Toast notification type should be success or error.")
    }

    if (route) {
      setTimeout(() => {
        router.push(route)
      }, 400)
    } else {
      setTimeout(() => {
        router.refresh()
      }, 400)
    }
  }
  return notification
}
