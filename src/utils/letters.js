export const fetchLettersPath = `${process.env.NEXT_PUBLIC_URL}/api/letters`

export const convertDate = (date) => {
  return (date = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }))
}
