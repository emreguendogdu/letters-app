import LettersList from "@/components/LettersList"

export default function Home() {
  return (
    <main className="flex flex-wrap box-border max-[768px]:flex-col mt-12 max-[768px]:mt-16 min-h-screen">
      <LettersList />
    </main>
  )
}
