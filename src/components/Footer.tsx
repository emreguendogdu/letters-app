import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full py-2 px-4 text-center bg-black text-white fixed bottom-0 left-0 right-0">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/starrynight.webp"
          alt="Van Gogh Starry Night background"
          className="object-cover opacity-20 rotate-180"
          fill
        />
      </div>
      <p className="text-xs">
        <a
          className="font-bold"
          href="https://linkedin.com/in/emregnd"
          target="_blank"
          rel="noreferrer"
        >
          emregnd{" "}
        </a>
        - © 2024
      </p>
    </footer>
  )
}
