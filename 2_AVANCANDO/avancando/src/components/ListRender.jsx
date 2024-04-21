import {useState} from "react";

const ListRender = () => {
    const[list] = useState(["Lívia", "John", "Ana", "Julia"]);

    const[users] = useState([
        {id: 1, name: "Lívia", age: 20},
        {id: 8743972, name: "John", age: 21},
        {id: 982374, name: "Ana", age:14},
    ]);

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
        </div>
    )
};

export default ListRender;