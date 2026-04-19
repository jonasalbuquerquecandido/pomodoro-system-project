import './styles/theme.css' 
import './styles/global.css' //importando o estilo

export function App() {
  console.log('Oi');

  return (
    <>   {/* <> react fragment, abre uma div/elemento pai sem nomea-lo */}
      <h1>Olá mundo!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
        fugit delectus. Quam facilis nobis, odit, nihil quod reprehenderit ipsam
        beatae iusto qui error, illo maxime ipsa. Possimus nesciunt optio
        corrupti.
      </p>
    </>
  );
}
