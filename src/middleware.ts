import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware() {
    return NextResponse.next()
  },
  {
    callbacks: {
      // Determine if the middleware should run
      authorized: ({ token }) => {
        // Only allow if there's a valid token
        return !!token
      },
    },
  }
)

export const config = { matcher: ["/addLetter", "/editLetter/(.*)"] }
