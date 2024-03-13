import useSWR from "swr"

const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())

export default function useLetters() {
  const { data, error, isLoading } = useSWR(`/api/letters`, fetcher)

  return {
    letters: data?.letters,
    isLoading,
    isError: error,
  }
}
