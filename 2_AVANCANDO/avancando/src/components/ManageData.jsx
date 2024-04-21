import { useState } from "react";

let someData = 10;

const ManageData = () => {
    //15 é o dado vindo diretamente do state
const [number, setNumber] = useState(15);
console.log(number);

    return(
        <div>
            <div>
             <p>Valor: {someData}</p>
             <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Muda mesmo variável</button>
            </div>
        </div>
    )
}

export default ManageData;