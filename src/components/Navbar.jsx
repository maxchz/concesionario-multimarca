import React from 'react';
// import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import TriggerDarkMode from 'components/TriggerDarkMode';

const Navbar = () => {
//usamos los use de la libreria de auth0 para agregar el login al boton
const { loginWithRedirect } = useAuth0();

  return (
    <nav className='bg-red-400'>
      <ul className="flex w-full justify-between my-5">
        <li>Logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li> <TriggerDarkMode/> </li>
        <li className="px-5">
          {/* <Link to='/login'> */}
            <button 
            onClick={() => loginWithRedirect()}
            className="bg-violet-700 p-2 text-white rounded-lg shadow-md hover:bg-violet-500">
              Iniciar Sesión
            </button>
          {/* </Link> */}
         
        </li>
        

      </ul>
        

    </nav>
  )
}

export default Navbar;

