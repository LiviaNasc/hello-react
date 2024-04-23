import { useState } from 'react';
import './App.css'

import Night from './assets/night.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUSerName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const [userName] = useState("Ana");

  return (
    
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img.jpg" alt="Rua"/>
      </div>
      {/*Imagem de assets*/}
      <div>
        <img src={Night} alt="Barco de noite" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUSerName name = {userName}/>
      <h1>Props destructuring</h1>
      {/* Destructuring */}
      <CarDetails brand="Renault" km={10000} color="Dourado" novo={false} />
      <CarDetails brand="Ford" km={0} color="Branco" novo={true} />
      <CarDetails brand="VW" km={100000} color="Branco" novo={false}/>
    </div>
  )
}

export default App
