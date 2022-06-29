import styled from "styled-components";
import { normalizeDate } from "../../utils/utils";

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`
const Picture = styled.picture`
  width: 130px;
  height: 130px;
  margin-right: 15px;
  object-fit: contain;
  position: static;
  opacity: 1;
`
const Img = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`
const Info = styled.div`
  flex: 1;
`
const Details = styled.div`
  color: #464545;
  font-size: 13px;
`
const Content = styled.div`
  font-size: 18px;
  line-height: 29px;
`


export default function NewsDetails({ news }) {

  const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

  return (
    <>
      <Header>
        <Picture>
          <Img decoding="async" src={news?.image ?? NO_IMAGE} alt={news.title} />
        </Picture>
        <Info>
          <h1>{news.title}</h1>
          <Details>
            <time dateTime={news.date}>{normalizeDate(news.date)}</time>
            <span> · {news.author}</span>
          </Details>
        </Info>
      </Header>
      <Content>
        <p>{news.content}</p>
      </Content>
    </>
  )
}

