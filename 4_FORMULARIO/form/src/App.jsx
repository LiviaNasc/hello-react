
import './App.css'
import MyForm from './assets/components/MyForm'

function App() {

  return (
    <>
      <h2>My Form</h2>
      {/*Controlled inputs */}
      <MyForm user={{name: "Lívia", email: "livia@gmail.com", bio: "Sou estudante", role: "admin"}}/>
    </>
  )
}

export default App
