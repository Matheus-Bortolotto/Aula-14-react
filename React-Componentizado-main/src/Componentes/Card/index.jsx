export default function Card({dados}){

    return(
        <>
        {
            dados.map((pegaDados, index) =>(
                <div 
                class="skill-card"
                key={index}
                style={
                    {
                        backgroundColor: pegaDados.color
                    }
                }
                >
                <h3> Titulo: {pegaDados.titulo}</h3>
                <p>Nível: {pegaDados.nivel}</p>
                <p>Tempo: {pegaDados.tempo}</p>
                <p>{index+1}</p>
                <img src={pegaDados.imagemIcone}/>
                <a href={pegaDados.linkCard}>{pegaDados.titulo}</a>
            </div>
            ))
        }

        </>
    )
}

// const{titulo, nivel, tempo} = props