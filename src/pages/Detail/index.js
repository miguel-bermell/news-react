import { useParams } from "react-router-dom"
import useSingleNews from "../../hooks/useSingleNews"

export default function Detail() {
  const { id } = useParams()
  const { isSuccess, isLoading, news } = useSingleNews(id) 

  console.log({ isSuccess, isLoading, news })

  return (
    <h1>Details</h1>
  )
}
