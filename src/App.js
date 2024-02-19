import React from "react";
import './style.js';
import People from './assets/people.svg'

import { 
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button
   } from './style.js';

const App = () => {
  return (
    <Container>

      <Image alt='logo-people' src="People"/>
      <ContainerItens> 
        <H1>Oi</H1>

        <InputLabel>Nome</InputLabel>
        <input placeholder="Nome"></input>

        <InputLabel>Idade</InputLabel>
        <input placeholder="Idade"></input>
        
        <button>Cadastrar</button>
      </ContainerItens>

    </Container>
  );
}

export default App;
