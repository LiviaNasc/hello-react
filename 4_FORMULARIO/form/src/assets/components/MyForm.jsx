import { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
    //Gerenciamento de dados
    const[name, setName] = useState();
    const[email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name);

    const handleSubmit = (event) => {
        // sem reload
        event.preventDefault();
        console.log("Enviando forms");
        console.log(name, email);
    }

    return (
        <div>
            {/*Envio de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName}/>
                </div>
                {/*label envolvendo input - sem htmlFor - abordagem sugerida*/}
                <label>
                    <span>E-mail</span>
                    <input type='email' name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value) }/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default MyForm;