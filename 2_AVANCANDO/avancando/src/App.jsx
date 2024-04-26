import { useState } from 'react';
import './App.css'

import Night from './assets/night.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUSerName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Cointainer';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const [userName] = useState("Ana");

  const cars = [
    {id: 1, brand: "Eclipse", color:"Prata", novo: false, km: 1000000},
    {id: 2, brand: "Ferrari", color:"Vermelho", novo: false, km: 350},
    {id: 3, brand: "Renault", color:"Cinza", novo: true, km: 0}
  ];

  function showMessage () {
    console.log('Evento do componente pai');
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
         key={car.id}
         brand={car.brand} 
         color={car.color} 
         novo={car.novo} 
         km={car.km}/>
      ))}
      <Fragment propFragment="teste" />
       {/*Children props*/}
       <Container myValue="testing">
        <p>E este é o conteúdo</p> 
        </Container>
        <Container myValue="testando ">
        <p>Reutilização do container</p> 
        </Container>
        {/*executar função*/}
        <ExecuteFunction myFunction={showMessage}/>
        {/*State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App
