function Estudante(props){
    let verificao = props.estuda

    if(verificao == true){
        return(
        <h1>Você é um estudante</h1>
    )
    }else{
        return(
            <h1>Você não é um estudante</h1>
        )
    }
}

export default Estudante