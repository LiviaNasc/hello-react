import {useState} from "react";

const ListRender = () => {
    const[list] = useState(["Lívia", "John", "Ana", "Julia"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Lívia", age: 20},
        {id: 2, name: "John", age: 21},
        {id: 3, name: "Ana", age:14},
    ]);


    const deleteRandom = function (){
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        console.log(randomNumber);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
            //retorna uma nova lista filtrada, onde somente os usuário cujo id não é igual a randomNumber são mantidos
        })
    };
    

    return(
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <h3>Objetos:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar usuário aletório</button>
        </div>
    )
};

export default ListRender;