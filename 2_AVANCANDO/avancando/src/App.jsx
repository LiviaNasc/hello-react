import { useState } from 'react';
import './App.css'

import Night from './assets/night.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUSerName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
  const [userName] = useState("Ana");

  const cars = [
    {id: 1, brand: "Eclipse", color:"Prata", novo: false, km: 1000000},
    {id: 2, brand: "Ferrari", color:"Vermelho", novo: false, km: 350},
    {id: 1, brand: "Renault", color:"Cinza", novo: true, km: 0}
  ];

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
      {/* Loop em array de objetos */}
      <h2>Map:</h2>
      {cars.map((car) => (
        <CarDetails 
         brand={car.brand} 
         color={car.color} 
         novo={car.novo} 
         km={car.km}/>
      ))}
      <Fragment propFragment="teste" />
    </div>
  )
}

export default App
