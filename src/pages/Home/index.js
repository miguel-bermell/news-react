import React from "react";
import { useEffect, useState } from "react";
import News from "../../components/News";
import getAllNews from "../../services/allNews";
import { NEWS_NOT_ARCHIVED } from "../../utils/constants";

export default function Home () {

  const [news, setNews] = useState([])

  useEffect(() => {
    getAllNews(NEWS_NOT_ARCHIVED).then(setNews)
  }, [])

  return (
   <>
    {
      news.length
      ?
        news.map(({ description, author, archiveDate, image, date }, i) =>
           <News
              key={i}
              archiveDate={archiveDate}
              author={author}
              description={description}
              image={image}
              date={date} />
        )
      : <h1>Loading...</h1>
    }
   </>
  )

}
