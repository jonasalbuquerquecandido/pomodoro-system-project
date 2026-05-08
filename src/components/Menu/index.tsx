import styles from './styles.module.css'
import { House, History, Settings, Sun} from 'lucide-react'

export function Menu() {
  return <nav className={styles.menu}>
    <a href="#" className={styles.menuLink}>
      <House />
    </a>
    <a href="#" className={styles.menuLink}>
      <History />
    </a>
    <a href="#" className={styles.menuLink}>
      <Settings />
    </a>
    <a href="#" className={styles.menuLink}>
      <Sun />
    </a>
  </nav>;
}