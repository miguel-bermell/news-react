import { useState, useEffect } from "react";
import getNewsById from "../services/getNewsbyId";

export default function useSingleNews(id) {
  const [news, setNews] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getNewsById(id)
      .then(({ data, success }) => {
        setNews(data)
        setIsLoading(false)
        setIsSuccess(success)
      }).catch(error => {
        setIsLoading(false)
        setIsSuccess(false)
      })
  }, [id])

  return {news, isLoading, isSuccess}
}
