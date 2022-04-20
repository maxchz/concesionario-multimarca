import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
// import Admin from "./pages/Admin";
import Index from 'pages/Index';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import Admin from 'pages/admin/index';
import {darkModeContext} from 'context/darkMode';



import 'styles/styles.css';


function App() {

  const [darkMode, setDarkMode]=useState(false);
  useEffect (()=>{
    console.log("modo dark:", darkMode);
  }, [darkMode]);

  return (

    <div className='App'>


      <darkModeContext.Provider value={{darkMode, setDarkMode}}>
  
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
      </darkModeContext.Provider>
  
    </div> 
  
  );

   

}

export default App;
