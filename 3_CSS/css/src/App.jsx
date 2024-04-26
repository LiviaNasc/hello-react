import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
   <div className='App'>
      <h1>React com CSS</h1>
      <MyComponent />
      {/*Conflito:  css do  componente vaza*/}
      <p>Este parágrafo é do App.jsx</p>
     {/*INLINE CSS */}
     <p style={{color: "blue", padding: "25px", borderTop:"2px solid black"}}>
      Elemento estilizado de forma inline</p>
   </div>
  )
}

export default App
