import React from "react";
import './style.js';
import People from './assets/people.svg'
import Arrow from './assets/arrow-right.svg'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './style.js';

const App = () => {

  const users = [
    { id: Math.random(), name: "Mikael", age: 28 },
    { id: Math.random(), name: "Priscilla", age: 28 }
  ];

  return (
    <Container>
      <Image alt='logo-people' src={People}/>
      <ContainerItens> 
        <H1>Oi!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>
        
        <Button>Cadastrar<img alt="seta" src={Arrow}/></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} - {user.age}</p>
              <button>Delete</button>
            </User>
          ))}      
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
