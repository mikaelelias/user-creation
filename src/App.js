import React from "react";
import './style.js';
import People from './assets/people.svg'
import Arrow from './assets/arrow-right.svg'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './style.js';

const App = () => {
  return (
    <Container>
      <Image alt='logo-people' src={People}/>
      <ContainerItens> 
        <H1>Oi</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>
        
        <Button>Cadastrar<img alt="seta" src={Arrow}/></Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
