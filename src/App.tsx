import { Timer, Settings, History, House, Sun } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css'; //importando o estilo

export function App() {
  return (
    <>
      {' '}
      {/* <> react fragment, abre uma div/elemento pai sem nomea-lo */}
        <div className='container'>
          <div className='content'>
            <section>
              LOGO
            </section>
          </div>
        </div> 

        <div className='container'>
          <div className='content'>
            <section>
              MENU
            </section>
          </div>
        </div> 

        <div className='container'>
          <div className='content'>
            <section>
              FORM
            </section>
          </div>
        </div> 

        <div className='container'>
          <div className='content'>
            <section>
              FOOTER
            </section>
          </div>
        </div> 
    </>
  );
}
