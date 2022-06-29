import { Link, NavLink } from "react-router-dom";
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to='/' className={styles.logo} >📰</Link>
        <nav>
          <ul className={styles.nav}>
            <li><NavLink className={styles['nav-item']} to='/'>Todas las noticias</NavLink></li>
            <li><NavLink className={styles['nav-item']} to='/news-archived'>Noticias archivadas</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
