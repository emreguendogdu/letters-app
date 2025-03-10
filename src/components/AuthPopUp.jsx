"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useNotification } from "@/hooks/useNotification"

export default function AuthPopUp({ setPopUpOpen }) {
  const [isRegister, setIsRegister] = useState(true)
  const [error, setError] = useState("")

  const notification = useNotification()

  const handleRegister = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    const resUserExists = await fetch("api/auth/userExists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const { user } = await resUserExists.json()

    if (user) {
      return notification("error", "User already exists.")
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
    if (res.ok) {
      const form = e.target
      form.reset()
      setPopUpOpen(false)
      notification("success", "Successfully registered!")
    } else {
      setError("Error. Please try again.")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (res.ok) {
        const form = e.target
        form.reset()
        setPopUpOpen(false)
        notification("success", "Successfully logged in!")
      } else {
        notification("error", "Email or password is wrong.")
      }
    } catch (err) {
      throw new Error(err)
    }
  }
  return (
    <div className="absolute inset-0 w-full h-screen flex justify-center items-center z-[99]">
      <div
        id="popup-background"
        className="absolute inset-0 w-full h-screen bg-black opacity-25 z-[95]"
        onClick={() => setPopUpOpen(false)}
      />
      <div className="relative bg-neutral-800 px-32 py-16 rounded-3xl z-[100]">
        {/* <button
          className="absolute top-2 right-4 text-lg text-white/60 border-[0.5px] border-white/20 rounded-full px-2"
          onClick={() => {
            setPopUpOpen(false)
          }}
        >
          x
        </button> */}
        <h2 className="font-bold font-mono text-white text-center mb-4 text-2xl">
          {isRegister ? "register" : "login"}
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={isRegister ? handleRegister : handleLogin}
        >
          {isRegister && (
            <input
              name="username"
              type="text"
              placeholder="username"
              className="input"
              required
            />
          )}
          <input
            name="email"
            placeholder="hello@mail.com"
            className="input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input"
            required
          />
          <button className="button input-button" type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-white/60 mt-4 max-w-[250px] text-center">
          <button
            className="text-white/90"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Log In" : "Register"}
          </button>
        </p>
        {error.length > 0 && (
          <p className="text-white/60 mt-4 max-w-[250px] text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
