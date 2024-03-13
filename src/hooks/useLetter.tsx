import useSWR from "swr"

const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())

export default function useLetter({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(`/api/letters/${id}`, fetcher)

  return {
    letter: data?.letter,
    isLoading,
    isError: error,
  }
}
