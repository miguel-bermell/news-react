import { useParams } from "react-router-dom"
import NewsDetails from "../../components/NewsDetails"
import Spinner from "../../components/Spinner"
import useNews from "../../hooks/useNews"
import getNewsById from "../../services/getNewsbyId";

export default function Detail() {
  const { id } = useParams()
  const { isSuccess, loading, news , message } = useNews(() => getNewsById(id)) 

  if (loading) return <Spinner />
  if (!isSuccess) return <h3>Ha ocurrido un error cargando la noticia: <span style={{color: 'red'}}>{message}</span></h3>

  return news
    ? <NewsDetails key={news.id} news={news} />
    : <h3>No hay ninguna noticia</h3>
}
