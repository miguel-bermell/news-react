import { API_URL, ALL_NEWS_QUERY_PARAM } from './settings'
import { loadAbort } from '../utils/utils'

export default function getAllNews(param = null) {
  let url = `${API_URL}/news`
  const controller = loadAbort()
  
  if (param) url = url.concat(`?${ALL_NEWS_QUERY_PARAM}=${param}`)

  return { call: fetch(url, { signal: controller.signal }).then(resp => resp.json()), controller };
}
