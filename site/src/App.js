
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import LandingAdm from './pages/Adm/landingAdm'
import CadastrarjogoAdm from './pages/Adm/cadastrarjogoAdm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/landingAdm' element={<LandingAdm/>}/>
        <Route path='/cadastrarjogoAdm' element={<CadastrarjogoAdm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
