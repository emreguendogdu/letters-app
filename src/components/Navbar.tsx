"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Nav = () => {
  const pathname = usePathname()
  const id = pathname.split("/")[2]
  const [button, setButton] = useState({
    href: "",
    text: "",
  })

  useEffect(() => {
    if (pathname === "/") {
      setButton({ href: "/addLetter", text: "New Letter" })
    } else if (pathname.match(/\/letters\/+/)) {
      setButton({ href: `/editLetter/${id}`, text: "Edit" })
    } else if (pathname.match(/\/editLetter+/)) {
      setButton({ href: `/letters/${id}`, text: "Back to Letter" })
    } else if (pathname === "/addLetter") {
      setButton({ href: "/", text: "Back" })
    } else {
      setButton({ href: "/addLetter", text: "New Letter" })
    }
  }, [pathname, id])

  return (
    <nav className="fixed top-0 left-0 right-0 px-8 py-3 flex justify-between items-center max-[768px]:px-3 bg-nav-img text-white z-10">
      <Link href={"/"} className="font-bold font-mono hover:tracking-wider hover:brightness-110 transition-all">
        Letters App
      </Link>
      <Link className="button" href={button.href}>
        {button.text}
      </Link>
    </nav>
  )
}

export default Nav
