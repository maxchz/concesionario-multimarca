import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
// import Admin from "./pages/Admin";
import Index from 'pages/Index';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import Ventas from 'pages/admin/Ventas';
import Admin from 'pages/admin/index';
import {darkModeContext} from 'context/darkMode';
// import  'styles/responsive.css';
import 'styles/styles.css';
import { Auth0Provider } from "@auth0/auth0-react";



function App() {

  const [darkMode, setDarkMode]=useState(false);
  useEffect (()=>{
    console.log("modo dark:", darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider
      domain="concecionario-vehiculos.us.auth0.com"
      clientId="Xv2habmjXRdg075ZReeT26VnpZlH0JLS"
      redirectUri={window.location.origin}>
      <div className='App'>


        <darkModeContext.Provider value={{darkMode, setDarkMode}}>

        <BrowserRouter>
            <Routes>

              <Route path='/login' element={<Login/>} />
              <Route path='/registro' element={<Registro/>} />
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/admin/clientes' element={<Clientes/>}/>
              <Route path='/admin/vehiculos' element={<Vehiculos/>}/>
              <Route path='/admin/ventas' element={<Ventas/>}/>

              <Route path='/' element={<Index/>} />                
                        
            </Routes>
        </BrowserRouter> 
</darkModeContext.Provider>

      </div> 

    </Auth0Provider>
    
  
  );

   

}

export default App;
