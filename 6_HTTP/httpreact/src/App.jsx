import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

// 1 - Resgatando dados 
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);

      // é utilizado json() para ler o corpo da resposta e convertê-lo de json para um objeto 
      const data = await res.json();
  
      setProducts(data)
    }
   fetchData();
    }, []);


  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
     <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name} - R$: {product.price}</li>
      ))}
     </ul>
    </div>
  )
}

export default App
