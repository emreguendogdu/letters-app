"use client"

import Link from "next/link"
import RemoveAllBtn from "./RemoveAllBtn"
import { usePathname } from "next/navigation"
import Button from "./Button"

const LettersAppLink = () => {
  return (
    <Link href={"/"} className="text-white font-bold">
      Letters App
    </Link>
  )
}

const Nav = ({ children, readLetter = false }: any) => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-black text-white">
      <LettersAppLink />
      {children}
    </nav>
  )
}

const lettersPageNavItems = () => {
  return (
    <div className="flex gap-2">
      <Button>
        <Link href={"/addLetter"}>Add Letter</Link>
      </Button>
      <RemoveAllBtn />
    </div>
  )
}

const addLetterNavItems = () => {
  return (
    <Button>
      <Link href={"/"}>Back</Link>
    </Button>
  )
}

const editLetterNavItems = (id: string) => {
  return (
    <Button>
      <Link href={`/letters/${id}`}>Back to Letter</Link>
    </Button>
  )
}

const readLetterNav = (id: string) => {
  return (
    <nav className="flex justify-between items-center max-w-3xl mx-auto px-8 py-3 bg-black text-white">
      <LettersAppLink />
      <Button>
        <Link href={`/editLetter/${id}`}>Edit</Link>
      </Button>
    </nav>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const id = pathname.split("/")[2]

  let items

  if (pathname === "/letters" || pathname === "/") items = lettersPageNavItems()
  if (pathname === "/addLetter") items = addLetterNavItems()
  if (pathname.match(/\/editLetter+/)) items = editLetterNavItems(id)
  if (pathname.match(/\/letters\/+/)) return readLetterNav(id)

  return <Nav>{items}</Nav>
}
