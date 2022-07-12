import React from "react";
import { connect } from "react-redux";
import FormNews from "../../components/FormNews";
import News from "../../components/News";
import Spinner from "../../components/Spinner";
import useNews from "../../hooks/useNews";
import getAllNews from "../../services/allNews";
import store from "../../store";
import { NEWS_NOT_ARCHIVED } from "../../utils/constants";

function Home ({ news: newsStorage, loadNews, likeToggled }) {
  const { dispatch } = store
  const { loading, isSuccess, message } = useNews(() => getAllNews(NEWS_NOT_ARCHIVED), dispatch.news.SET_NEWS)

  const handleNewsForm = (news) => {
    dispatch.news.SET_NEW_NEWS(news)
  }

  if (loading) return <Spinner />
  if (!isSuccess) return <h3>Ha ocurrido un error cargando las noticias: {message}</h3>

  return (
   <>
    {
      newsStorage && newsStorage?.length
      ?
        newsStorage.map(({ id, description, author, archiveDate, image, date, liked }) =>
           <News
              key={id}
              id={id}
              archiveDate={archiveDate}
              author={author}
              description={description}
              image={image}
              liked={liked}
              followToggled={likeToggled}
              date={date} />
        )
      : <h1>No hay noticias para mostrar</h1>
    }
    {!loading ? <FormNews setNewsForm={handleNewsForm} /> : null}
   </>
  )
}

const mapProps = (state) => ({
  news: state.news.news
})

const mapDispatch = (dispatch) => ({
  loadNews: dispatch.news.loadNews,
  likeToggled: dispatch.news.likeToggled,
})

export default React.memo(connect(mapProps, mapDispatch)(Home))
