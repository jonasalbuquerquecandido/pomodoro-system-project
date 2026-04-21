import { Heading } from './components/Heading';

import './styles/theme.css' 
import './styles/global.css' //importando o estilo

export function App() {
  console.log('Oi');

  return (
    <>   {/* <> react fragment, abre uma div/elemento pai sem nomea-lo */}
      <Heading attr={123} attr2='string'>Olá Mundo!</Heading>
      
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        fugit delectus. Quam facilis nobis, odit, nihil quod reprehenderit ipsam
        beatae iusto qui error, illo maxime ipsa. Possimus nesciunt optio
        corrupti.
      </p>
    </>
  );
}
