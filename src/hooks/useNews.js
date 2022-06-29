import { useState, useEffect, useCallback } from "react";
import useFetch from "./useFetch";

export default function useNews(service) {
  const { loading, callEndpoint } = useFetch()
  const [news, setNews] = useState(null)
  const [isSuccess, setIsSuccess] = useState(true)
  const [message, setMessage] = useState('')

  const getApiData = useCallback(
    async () => {
      try {
        const { data, success, message } = await callEndpoint(service())
        setNews(data)
        setIsSuccess(success)
        setMessage(message)
      } catch (error) {
        setIsSuccess(false)
        setMessage(error.message)
      }
    }, [callEndpoint, service]
  )

  useEffect(() => {
    getApiData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { news, loading, isSuccess, message }
}
