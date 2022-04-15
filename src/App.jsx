import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Login from 'pages/Login';
import Registro from 'pages/Registro';
// import Admin from "./pages/Admin";
import Index from 'pages/Index';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import Admin from 'pages/admin/index';



import 'styles/styles.css';


function App() {
  return (
   

    <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login/>} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/clientes' element={<Clientes/>}/>
          <Route path='/admin/vehiculos' element={<Vehiculos/>}/>
          <Route path='/' element={<Index/>} />                
                    
        </Routes>
    </BrowserRouter>    
  
  );

   

}

export default App;
