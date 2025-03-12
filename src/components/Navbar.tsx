"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import AuthPopUp from "@/components/AuthPopUp"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

export function AccountIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
      ></path>
    </svg>
  )
}

const getButtonConfig = (pathname: string, session: any) => {
  if (pathname === "/") return { href: "/addLetter", text: "Create New Letter" }
  if (pathname.startsWith("/letters/"))
    return { href: `/editLetter/${pathname.split("/")[2]}`, text: "Edit" }
  if (pathname.startsWith("/editLetter"))
    return {
      href: `/letters/${pathname.split("/")[2]}`,
      text: "Back to Letter",
    }
  if (pathname === "/addLetter") return { href: "/", text: "Back" }
  return { href: "/addLetter", text: "Create New Letter" }
}

export default function Nav() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const button = useMemo(
    () => getButtonConfig(pathname, session),
    [pathname, session]
  )

  console.log(session)

  const [authPopUpOpen, setAuthPopUpOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-8 py-3 flex justify-between items-center max-[768px]:px-3 text-white z-10 bg-black">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/starrynight.webp"
            alt="Van Gogh Starry Night background"
            className="object-cover opacity-50"
            fill
            priority
          />
        </div>
        <Link
          href={"/"}
          className="font-bold font-mono hover:tracking-wider hover:brightness-110 transition-all bg-black px-4 py-2"
        >
          Letters App
        </Link>
        <div className="flex gap-4">
          {button && session ? (
            <Link className="button" href={button.href}>
              {button.text}
            </Link>
          ) : (
            <button className="button" onClick={() => setAuthPopUpOpen(true)}>
              {button.text}
            </button>
          )}
          {session && pathname === "/" && (
            <button className="button" onClick={() => signOut()}>
              Sign Out
            </button>
          )}
        </div>
      </nav>
      {authPopUpOpen && <AuthPopUp setPopUpOpen={setAuthPopUpOpen} />}
    </>
  )
}
