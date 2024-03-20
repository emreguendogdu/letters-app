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
        <div className="mx-auto px-14 py-3 max-[768px]:px-4">
          <Navbar />
          <div className="mt-2">{children}</div>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
