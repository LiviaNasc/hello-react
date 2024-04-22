import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const[name, setName] = useState("Lívia");

    return(
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p> Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <h2>O nome será exibido?</h2>
            {name === "Lívia" ? (
            <div>
            <p> O nome é Lívia</p>
            </div>
            ) : (<div><p>Nada a ver</p></div>)}
            {/*O react vai renderizar novamente o componente, trazendo tudo atualizado*/}
            <button onClick={() => setName("Ana")}>Mudar nome</button>
        </div>
    )
}


export default ConditionalRender;