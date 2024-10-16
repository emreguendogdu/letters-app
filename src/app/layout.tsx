import type { Metadata } from "next"
import "./styles/globals.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Letters App",
  description: "Interactive and simple letters app.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-helveticaNow">
          <Navbar />
        <main className="px-14 mt-20 mb-10 md:mt-24 md:mb-12 max-[768px]:px-4">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
