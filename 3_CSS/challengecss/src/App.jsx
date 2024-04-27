import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const myCars = [
    {id: 1, marca: "Renault", ano:"2013" , km:10000 },
    {id: 2, marca: "Renault" , ano:"2023" , km:0},
    {id: 3, marca:"Honda" , ano: "2008", km: 982348 },
  ];

  return (
    <>
     <h1 className='title'>Challenge CSS</h1>
     <div className='carDetails'>
      {myCars.map((car, id) => (
        <CarDetails car = {car} key={id}/>
      ))}
     </div>
     
     <ul>
      <ol>
        teste
      </ol>
     </ul>
    </>
  )
}

export default App
