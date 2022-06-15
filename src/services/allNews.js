import { API_URL, ALL_NEWS_QUERY_PARAM } from './settings'

export default async function getAllNews(param = null) {
  let url = `${API_URL}/news`

  if (param) url = url.concat(`?${ALL_NEWS_QUERY_PARAM}=${param}`)

  try {
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
