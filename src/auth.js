import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

import User from "./models/user"
import bcrypt from "bcrypt"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
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
    jwt: async ({ token, user }) => {
      if (user) {
        token.uid = user
      }

      return token
    },
    session: async ({ session, token }) => {
    },
  },
})
