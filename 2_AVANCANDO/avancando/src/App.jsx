import './App.css'

import Night from './assets/night.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {

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
    </div>
  )
}

export default App
