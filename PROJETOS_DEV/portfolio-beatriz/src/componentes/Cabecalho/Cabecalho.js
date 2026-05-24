import './Cabecalho.css'

import './Cabecalho.css'
import { Link } from 'react-router-dom'

function Cabecalho(){

    return(

        <nav className="navbar">
            <div className="nav-logo">
                Bia Farias
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/expAca">Experiência Acadêmica</Link></li>
                <li><Link to="/expProf">Experiência Profissional</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
            </ul>
        </nav>

    )

}

export default Cabecalho