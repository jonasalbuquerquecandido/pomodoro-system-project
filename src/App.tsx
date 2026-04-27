import { Heading } from './components/Heading';

import './styles/theme.css' 
import './styles/global.css' //importando o estilo

export function App() {
  return (
    <>   {/* <> react fragment, abre uma div/elemento pai sem nomea-lo */}
      <Heading>Olá Mundo!</Heading>
      
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        fugit delectus. Quam facilis nobis, odit, nihil quod reprehenderit ipsam
        beatae iusto qui error, illo maxime ipsa. Possimus nesciunt optio
        corrupti.
      </p>
    </>
  );
}
