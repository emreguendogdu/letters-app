export const convertDate = (date: any) => {
  return (date = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }))
}



export const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())
