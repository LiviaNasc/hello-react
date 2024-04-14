const TemplateExpressions = () => {
    const name = "Lívia";
    const data = {
        age: 20,
        job: "Estudante",
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{2+2}</p>
            {console.log("livia")}
        </div>
    );
};

export default TemplateExpressions;