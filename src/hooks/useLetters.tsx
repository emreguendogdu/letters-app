import { fetcher } from "@/utils/utils"
import useSWR from "swr"

export default function useLetters() {
  const { data, error, isLoading } = useSWR(`/api/letters`, fetcher)

  return {
    letters: data?.letters,
    isLoading,
    isError: error,
  }
}
