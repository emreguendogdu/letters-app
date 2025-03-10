import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/user"
import bcrypt from "bcrypt"

export const authOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials === null) return null

        try {
          const user = await User.findOne({
            email: credentials.email,
          })

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isMatch) {
              return user
            } else {
              throw new Error("Email or password incorrect.")
            }
          } else {
            throw new Error("User not found.")
          }
        } catch (err) {
          throw new Error(err)
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          id: token.id,
        }
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
