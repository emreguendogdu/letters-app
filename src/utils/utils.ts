export const convertDate = (date: any) => {
  return (date = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }))
}

// const fetchWithTiming = async () => {
//   const start = performance.now()
//   const data = await fetchLetters()
//   const end = performance.now()
//   console.log(`Fetch took ${end - start}ms`)
//   return data
// }

export const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())
