import './Inicio.css'

function Inicio(){
    return(
        <section className="inicio">
            <div className="inicio-texto">
                <h1>
                    Beatriz Farias
                </h1>
                <h2>
                    Desenvolvedora & Engenheira de IA
                </h2>

                <p className="inicio-descricao">
                    Gosto de transformar ideias em soluções com aplicações web,
                    utilizando dados e com uso de automações em Machine Learning.
                </p>
                <a href="/curriculo.pdf" className="inicio-botao">
                    Baixar CV
                </a>

            </div>

            <div className="inicio-imagem">
                <div className="circulo">
                    <img src='/bia_farias.jpeg' />
                </div>

            </div>

        </section>
    )
}

export default Inicio