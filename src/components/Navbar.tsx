"use client"

import Link from "next/link"
import RemoveAllBtn from "./forms/RemoveAllBtn"
import { usePathname } from "next/navigation"
import Button from "./forms/Button"

const LettersAppLink = () => {
  return (
    <Link href={"/"} className="font-bold font-mono">
      Letters App
    </Link>
  )
}

const navClasses =
  "flex justify-between items-center px-8 py-3 max-[768px]:px-3 bg-nav-img text-white"

const Nav = ({ children, readLetter = false }: any) => {
  return (
    <nav className={navClasses}>
      <LettersAppLink />
      {children}
    </nav>
  )
}

const lettersPageNavItems = () => {
  return (
    <div className="flex gap-2">
      <Button>
        <Link href={"/addLetter"}>New Letter</Link>
      </Button>
      {/* <RemoveAllBtn /> */}
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
    <nav className={`${navClasses} max-w-3xl mx-auto`}>
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
