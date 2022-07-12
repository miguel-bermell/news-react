import { API_URL } from "./settings";
import { loadAbort } from '../utils/utils'

export default function createNews(body) {
  const URL = `${API_URL}/news`
  const headers = { "Accept": "application/json, text/plain, */*" }
  const controller = loadAbort()
  return {
    call: fetch(URL, {
      method: 'POST',
      headers,
      body,
      signal: controller.signal,
    }).then((resp) => resp.json()),
    controller,
  }
}
