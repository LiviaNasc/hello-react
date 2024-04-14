const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Ou também posso renderizar isso</h1>
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou no segundo botão!")}>
                    Clique aqui também!
                    </button>
            </div>
            {renderSomething(true)}
            {renderSomething()}
            {renderSomething(false)}
        </div>
    )
} 

export default Events;