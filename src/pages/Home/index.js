import News from "../../components/News";
import Spinner from "../../components/Spinner";
import useNews from "../../hooks/useNews";
import getAllNews from "../../services/allNews";
import { NEWS_NOT_ARCHIVED } from "../../utils/constants";

export default function Home () {

  const { loading, isSuccess, news, message } = useNews(() => getAllNews(NEWS_NOT_ARCHIVED))
  
  if (loading) return <Spinner />
  if (!isSuccess) return <h3>Ha ocurrido un error cargando las noticias: {message}</h3>

  return (
   <>
    {
      news
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
      : <h1>No hay noticias para mostrar</h1>
    }
   </>
  )

}
