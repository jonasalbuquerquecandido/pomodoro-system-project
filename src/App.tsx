import { Timer, Settings, History, House, Sun } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css'; //importando o estilo
import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    
    </>
  );
}
