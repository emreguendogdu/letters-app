import { redirect } from "next/navigation"
import { getLetterById } from "@/utils/letters"

import Letter from "@/components/Letter"

export default async function page({ params: { id } }) {
  const { letter } = (await getLetterById(id)) || redirect("/letters")
  return <Letter letter={letter} />
}
