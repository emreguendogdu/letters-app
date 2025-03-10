"use client"

import { useSession } from "next-auth/react"

export default function useSessionId() {
  const { data: session } = useSession()
  const sessionId = session?.user?.id

  return sessionId || null
}
