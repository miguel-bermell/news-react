import { Link } from 'react-router-dom'
import { normalizeDate } from '../../utils/utils'
import Like from '../Like'
import styles from './styles.module.css'

const News = ({ id, description, author, archiveDate, image, date, liked, followToggled }) => {

  const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

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
     </div>
     <Like followToggled={() => followToggled({id})} liked={liked} />
     {/* <button onClick={() => followToggled(id)}>sdsd</button> */}
    </Link>
  )
}

export default News
