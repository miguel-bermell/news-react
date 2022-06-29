import { API_URL } from "./settings";
import { loadAbort } from '../utils/utils'

export default function getNewsById(id) {
  const URL = `${API_URL}/news/${id}`
  const controller = loadAbort()
  return { call: fetch(URL, { signal: controller.signal }).then(resp => resp.json()), controller };
}
