
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeAdm from './pages/Adm/homeAdm';
import LandingAdm from './pages/Adm/landingAdm'
import CadastrarjogoAdm from './pages/Adm/cadastrarjogoAdm';


export default function Index() {
    return(
     <BrowserRouter>
      <Routes>
        <Route path='/homeAdm' element={<HomeAdm/>}/> 
         
        <Route path='/landingAdm' element={<LandingAdm/>}/>
        
        <Route path='/cadastrarjogoAdm' element={<CadastrarjogoAdm/>}/>
                
      </Routes>
      </BrowserRouter>
    )  
}
