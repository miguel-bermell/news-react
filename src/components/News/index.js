import { Link } from 'react-router-dom'
import { normalizeDate } from '../../utils/utils'
import { Trash } from '../icons'
import Like from '../Like'
import styles from './styles.module.css'

const News = ({ id, description, author, deleteNews, image, date, liked, followToggled }) => {

  const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  const handleDelete = (e) => {
    e.preventDefault()
    deleteNews(id)
  }
  return (
    <Link to={`/news/${id}`} className={styles.article}>
     <picture>
      <img src={image || NO_IMAGE} alt={author}></img>
     </picture>
     <div className={styles.content}>
      <h2 className={styles.truncate}>{description}</h2>
      <div className={styles.info}>
        <time dateTime={date}>{normalizeDate(date)}</time>
        <span> | <b>{author}</b> </span>
      </div>
      <Trash onClick={handleDelete} width={20} />
     </div>
     <Like followToggled={() => followToggled({id})} liked={liked} />
    </Link>
  )
}

export default News
