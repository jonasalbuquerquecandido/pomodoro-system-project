import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { House, History, Settings, Sun, Moon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

    return storageTheme
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme]);

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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
