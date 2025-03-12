import { fetcher } from "@/utils/utils"
import useSWR from "swr"

export default function useLetters() {
  const { data, error, isLoading } = useSWR(`/api/letters`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    letters: data?.letters,
    isLoading,
    isError: error,
  }
}
