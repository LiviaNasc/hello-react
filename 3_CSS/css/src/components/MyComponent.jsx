import './MyComponent.css';

const MyComponent = () => {
  return (
    <div>
        <h1>CSS dentro do MyComponent</h1>
        <p>Este é o  parágrafo do componente</p>
        {/*Criação sem vazar estilos: */}
        <p className='my-comp-paragraph'>Este também é do component</p>
    </div>
  )
}

export default MyComponent