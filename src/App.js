import React, { useState, useRef } from "react";
import axios from 'axios'

import './style.js';
import People from './assets/people.svg'
import Arrow from './assets/arrow-right.svg'
import Trash from './assets/trash.svg'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './style.js';

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value })

    console.log(data)

    /*setUsers([...users, 
      { id: Math.random(), 
        name: inputName.current.value, 
        age: inputAge.current.value }]);*/
  }

  function deleUser(userId) {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt='logo-people' src={People} />
      <ContainerItens>
        <H1>Oi!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar<img alt="seta" src={Arrow} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} - {user.age}</p>
              <button onClick={()=> deleUser(user.id)}>
                <img src={Trash} alt="seta" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
