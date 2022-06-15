import { API_URL } from "./settings";

export default async function getNewsById(id) {
  const URL = `${API_URL}/news/${id}`

  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
