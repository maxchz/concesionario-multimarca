import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Link} from 'react-router-dom';
import {FaCarSide,FaRegUser,FaCashRegister,FaUsers} from 'react-icons/fa';
import ImagenLogo from 'components/ImagenLogo';



const Sidebar = () => {
  return ( 
    <nav className="flex flex-col w-72 border border-gray-350 bg-violet-300 p-4 sidebar ">

          

        <Link to='/admin'>
          <div>
            <ImagenLogo/>
          </div>
        </Link> 

        <div className="my-4">
          <Link to="/admin/perfil">
            <button className="flex items-center p-1 my-2 bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
            <FaRegUser className="w-10"/> Perfil</button>  
          </Link>

          
          <Link to="/admin/vehiculos">
            <button className="flex items-center p-1 my-2 bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
            <FaCarSide className="w-10"/> Administrar Vehiculos</button>
          </Link>

          <Link to="/admin/ventas">
            <button className="flex items-center p-1 my-2 bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
            <FaCashRegister className="w-10"/> Ventas</button>
          </Link>

          <Link to="/admin/usuarios">
            <button className="flex items-center p-1 my-2  bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
            <FaUsers className="w-10"/> Usuarios</button>
          </Link>


        </div>

        

          
        
        <button>Cerrar Sesión</button>
       
        

    </nav>
  );
};

// const Ruta =({ruta,nombre})=> {
//   return (
//     <Link to={ruta}>
//       <button className="flex items-center p-1 bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
//          {nombre}</button>

//     </Link>
//   );
// };


export default Sidebar;