import useNews from "../../hooks/useNews"
import getAllNews from "../../services/allNews"
import Spinner from "../../components/Spinner"
import News from "../../components/News"
import { NEWS_ARCHIVED } from "../../utils/constants"

export default function Archived() {
  const { loading, isSuccess, news, message } = useNews(() => getAllNews(NEWS_ARCHIVED))
  
  if (loading) return <Spinner />
  if (!isSuccess) return <h3>Ha ocurrido un error cargando las noticias: {message}</h3>

  return (
   <>
    {
      news && news?.lenght
      ?
        news.map(({ id, description, author, archiveDate, image, date }) =>
           <News
              key={id}
              id={id}
              archiveDate={archiveDate}
              author={author}
              description={description}
              image={image}
              date={date} />
        )
      : <h1>No hay noticias archivadas para mostrar</h1>
    }
   </>
  )
}
