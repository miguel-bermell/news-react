import { API_URL } from "./settings";
import { loadAbort } from '../utils/utils'

export default function editNews(body) {
  const URL = `${API_URL}/news/${body.id}`;
  const headers = { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json" };
  const controller = loadAbort()
  return {
    call: fetch(URL, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
      signal: controller.signal,
    }).then((resp) => resp.json()),
    controller,
  }
}
