import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { House, History, Settings, Sun } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //não seguir a ordem padrão

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

 
  useEffect(() => {
    console.log('Theme changed', Date.now());
    document.documentElement.setAttribute('data-theme', theme)

    return () => {
      console.log('Olha, o componete será atualizado.') //limpeza de ruído
    }
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
        <Sun />
      </a>
    </nav>
  );
}
