import './Projetos.css'
import { useEffect, useState } from 'react'

function Projetos(){
    const [repositorios, setRepositorios] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/beatrizfariasilva/repos')
            .then(response => response.json())
            .then(data => {

                const projetosFiltrados = data.filter(repo =>

                    repo.name==='Formacao-em-Machine_Learning' ||
                    repo.name==='HTML-projeto-final'||
                    repo.name==='software-de-gerenciamento-de-entregas-confeitaria'||
                    repo.name==='triage-swift-ai-bd'||
                    repo.name==='Equipe01-ExtracaoAudio-GloboRio'||
                    repo.name==='voya-planejador-de-gasto-de-viagens'
                )

                const projetoGlobo = {
                    id: 999,
                    name: 'Extrator de áudio em vídeo',
                    language: 'Python',
                    html_url: 'https://github.com/Arthurms-dev/Equipe01-ExtracaoAudio-GloboRio',
                }

                const projetoFinalIP = {
                    id: 999,
                    name: 'Game com PyGame - Projeto Final de Introdução a Programação',
                    language: 'Python',
                    html_url: 'https://github.com/lgns-cin/projeto-ip',
                }
            
                setRepositorios([...projetosFiltrados, projetoGlobo, projetoFinalIP])
            })
    }, [])

        const nomesBonitos = {
            'HTML-projeto-final': 'Projeto Web P1 Final',
            'software-de-gerenciamento-de-entregas-confeitaria':
            '   Sistema de Entregas',
            'triage-swift-ai-bd':
                'Triage Swift AI',
            'voya-planejador-de-gasto-de-viagens':
                'Voya' 
        }

    return(
        <section className="projetos" id="projetos">

            <div className="projetos-titulo">
                <h2>
                    projetos.
                </h2>
            </div>


            <div className="projetos-grid">
                {repositorios.map(repo => (
                    <div className="card-projeto" key={repo.id}>
                        <h3>
                            {nomesBonitos[repo.name]||repo.name}
                        </h3>
                        <div className='projetos-linguaguem'>
                            <span className="linguagem">
                                {[repo.language]}
                            </span>
                        </div>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            Ver repositório →
                        </a>
                    </div>
                ))}
            </div>
        </section>

    )

}

export default Projetos