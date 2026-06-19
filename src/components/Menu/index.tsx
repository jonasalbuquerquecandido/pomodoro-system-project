import styles from './styles.module.css';
import { useState } from 'react';
import { House, History, Settings, Sun } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault() //não seguir a ordem padrão
    console.log('Clicado', Date.now());
  }

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <House />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ver Histórico '
        title='Ver Histórico'
      >
        <History />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações '
      >
        <Settings />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema '
        title='Mudar tema '
        onClick={handleThemeChange}
      >
        <Sun />
      </a>
    </nav>
  );
}
