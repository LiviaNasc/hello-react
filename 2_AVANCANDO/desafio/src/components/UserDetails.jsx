const UserDetails = ({nome, idade, profissao}) => {
    return(
        <div>
            <h5>Cliente</h5>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                {idade >= 18 ? (<p>Pode tirar carteira</p>) :
               (<p>Não pode tirar carteira</p>) }
            </ul>
        </div>
    )
};

export default UserDetails;