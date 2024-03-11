import toast from "react-hot-toast"

export function handleSuccess(router: any, message = "Success") {
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
  setTimeout(() => {
    router.refresh()
  }, 400)
}
