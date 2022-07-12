import { API_URL } from "./settings";
import { loadAbort, normalizeStoredData } from '../utils/utils'
import store from "../store";
export default function getNewsById(id) {
  const { dispatch } = store

  const newsStored = dispatch.news.getNewsById(id)
  if (newsStored) return normalizeStoredData(newsStored)

  const URL = `${API_URL}/news/${id}`
  const controller = loadAbort()
  return { call: fetch(URL, { signal: controller.signal }).then(resp => resp.json()), controller };
}
