import './Sobre.css'

function Sobre(){

    return(

        <section className="sobre" id="sobre">

            <h2>
                sobre.
            </h2>

            <p className="sobre-texto">
                Graduanda em Inteligência Artificial e Sistemas para Internet, com sólido interesse nas áreas
                de Desenvolvimento Web e automação/melhoria de processos com Ciência de dados e Engenharia de Machine Learning.
            </p>

            <div className="competencias-container">
                <div className="categoria-skills">
                    <h3>Back-end & APIs</h3>
                    <div className="tecnologias">
                        <p>Java</p>
                        <p>SpringBoot</p>
                        <p>Python</p>
                        <p>API Rest</p>
                        <p>SQL</p>
                        <p>POO</p>
                    </div>
                </div>

                <div className="categoria-skills">
                    <h3>Dados & Machine Learning</h3>
                    <div className="tecnologias">
                        <p>Pandas</p>
                        <p>Scikit-learn</p>
                        <p>Ciência de Dados</p>
                    </div>
                </div>

                <div className="categoria-skills">
                    <h3>Front-end & Design</h3>
                    <div className="tecnologias">
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>HTML & CSS</p>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre