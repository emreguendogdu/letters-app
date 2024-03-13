import EditLetterForm from "@/components/forms/EditLetterForm"
import { getLetterById } from "@/utils/letters"

export default async function EditLetter({ params: { id } }: any) {
  const {
    letter: { title, description, letter },
  } = await getLetterById(id)
  return (
    <EditLetterForm
      id={id}
      title={title}
      description={description}
      letter={letter}
    />
  )
}
