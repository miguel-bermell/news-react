import { Link } from "react-router-dom";
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo} >📰</Link>
        <nav>
          <ul className={styles.nav}>
            <li><Link className={styles['nav-item']} to="/">Todas las noticias</Link></li>
            <li><Link className={styles['nav-item']} to="/">Noticias archivadas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
