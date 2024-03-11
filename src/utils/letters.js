export const fetchLettersPath = `${process.env.NEXT_PUBLIC_URL}/api/letters`

export const getLetters = async () => {
  try {
    const res = await fetch(fetchLettersPath, {
      cache: "no-store",
    })
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (err) {
    console.error("Error getting letters: ", err)
    return { letters: [] }
  }
}

export const getLetterById = async (id) => {
  try {
    const res = await fetch(`${fetchLettersPath}/${id}`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) throw new Error("Error getting single letter: ")
    return res.json()
  } catch (err) {
    console.log("Error getting single letter: ", err)
  }
}
