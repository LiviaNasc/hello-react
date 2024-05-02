import { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {

    //Gerenciamento de dados
    const[name, setName] = useState(user ? user.name : "");
    const[email, setEmail] = useState(user ? user.email : "");
    const[bio, setBio] = useState(user ? user.bio : "");
    const[role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name);

    const handleSubmit = (event) => {
        // sem reload
        event.preventDefault();
        console.log("Enviando forms");
        console.log(name, email, bio, role);

        //Limpar forms
        setEmail("");
        setName("");
        setBio("");
    }

    return (
        <div>
            {/*Envio de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name}/>
                </div>
                {/*label envolvendo input - sem htmlFor - abordagem sugerida*/}
                <label>
                    <span>E-mail</span>
                    <input type='email' name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label>
                    <span>Biografia: </span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administração</option>
                    </select>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default MyForm;