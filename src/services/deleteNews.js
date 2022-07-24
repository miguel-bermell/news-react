import { API_URL } from "./settings";
import { loadAbort } from '../utils/utils'

export default function deleteNews(id) {
  const URL = `${API_URL}/news/${id}`
  const headers = { "Accept": "application/json, text/plain, */*" }
  const controller = loadAbort()
  return {
    call: fetch(URL, {
      method: 'DELETE',
      headers,
      signal: controller.signal,
    }).then((resp) => resp.json()),
    controller,
  }
}
