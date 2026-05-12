import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';

import './styles/theme.css';
import './styles/global.css'; //importando o estilo

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>    

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <label htmlFor="input">task</label>
            <input type="text" id="input" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 </p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container> 
    </>
  );
}
