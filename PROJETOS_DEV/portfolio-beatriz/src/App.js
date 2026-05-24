import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Inicio from './componentes/Inicio/Inicio';
import Sobre from './componentes/Sobre/Sobre';
import ExpAcademica from './componentes/ExpAcademica/ExpAcademica';
import ExpProfissional from './componentes/ExpProfissional/ExpProfissional';
import Projetos from './componentes/Projetos/Projetos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css'


function App() {
  return (
    <div className="App">
      <title> Beatriz Farias | Dev & IA </title>

      <BrowserRouter>
        <Cabecalho />

        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/expAca" element={<ExpAcademica />}/>
            <Route path="/expProf" element={<ExpProfissional />}/>
            <Route path="/projetos" element={<Projetos />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
