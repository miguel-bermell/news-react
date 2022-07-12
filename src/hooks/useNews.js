import { useState, useEffect, useCallback } from "react";
import useFetch from "./useFetch";

export default function useNews(service, actionDispatch = null, dependencies = []) {
  const { loading, callEndpoint } = useFetch()
  const [news, setNews] = useState(null)
  const [isSuccess, setIsSuccess] = useState(true)
  const [message, setMessage] = useState('')
  
  const getApiData = useCallback(
    async () => {
      if (typeof service !== 'function') return null
      try {
        const { data = null, success, message } = await callEndpoint(service())
        setNews(data)
        actionDispatch && actionDispatch(data)
        setIsSuccess(success)
        setMessage(message)
      } catch (error) {
        setIsSuccess(false)
        setMessage(error.message)
      }
    }, [callEndpoint, service, actionDispatch]
  )

  useEffect(() => {
    getApiData()
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { news, loading, isSuccess, message, setNews }
}
