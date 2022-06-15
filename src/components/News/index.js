import { Link } from 'react-router-dom'
import { normalizeDate } from '../../utils/utils'
import styles from './styles.module.css'

const News = ({ description, author, archiveDate, image, date }) => {

  const NO_IMAGE = 'https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101032.jpg'

  return (
    <Link to={'/'} className={styles.article}>
     <picture>
      <img src={image ?? NO_IMAGE} alt={author}></img>
     </picture>
     <div className={styles.content}>
      <h2 className={styles.truncate}>{description}</h2>
      <div className={styles.info}>
        <time dateTime={date}>{normalizeDate(date)}</time>
        <span> | <b>{author}</b> </span>
      </div>
     </div>
    </Link>
  )
}

export default News
