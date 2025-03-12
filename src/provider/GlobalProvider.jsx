"use client"

import { SessionProvider } from "next-auth/react"

export default function GlobalProvider({ children }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  )
}
