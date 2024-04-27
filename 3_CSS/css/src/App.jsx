import './App.css'
import {useState} from "react";
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

const n = 15;
const[name] = useState("Lívia");
const redTitle = true;

  return (
   <div className='App'>
      <h1>React com CSS</h1>
      <MyComponent />
      {/*Conflito:  css do  componente vaza*/}
      <p>Este parágrafo é do App.jsx</p>
     {/*INLINE CSS */}
     <p style={{color: "blue", padding: "25px", borderTop:"2px solid black"}}>
      Elemento estilizado de forma inline</p>
      {/*CSS inlinedinâmico */}
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Lívia" ? ({color: "purple", backgroundColor: "#eee"}) : null}>{name}</h2>
      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      {/*CSS Modules */}
      <Title />
      <h2 className="my_title">Testando - não pega o css</h2>
   </div>
  )
}

export default App
