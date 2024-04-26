import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails';

function App() {

    const pessoas = [
      {id: 1, nome: "Lívia", idade: 20, profissao: "estudante"},
      {id: 2, nome: "John", idade: 20, profissao: "estudante"},
      {id: 3, nome: "Fulano", idade: 50, profissao: "desenvolvedor"},
      {id: 4, nome: "Aninha", idade: 14, profissao: "estudante"}
    ];

  return (
    <>
    <h1>Lista de pessoas</h1>
    {pessoas.map((pessoas) => (
    <UserDetails key={pessoas.id} nome={pessoas.nome} idade={pessoas.idade} profissao={pessoas.profissao} />
    ))}
    
    </>
  )
}

export default App
