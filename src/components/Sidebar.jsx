import React from 'react';
import {Link} from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';
import ImagenLogo from 'components/ImagenLogo';
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {
  // si usamos el user que nos da Auth0, no devuelve informacion del usuario
  const { user, logout } = useAuth0();

  
  //Funcion para borrar el localSotrage cunado el usuario cierra sesion
  const cerrarSesion=()=>{
    logout({ returnTo: window.location.origin });
    localStorage.setItem('token', null);

  }

  return ( 
      <nav className=" hidden md:flex  flex-col w-72 border border-gray-350 bg-violet-300 p-4  ">
        <Link to='/admin'>
          <div>
            <ImagenLogo/>
          </div>
        </Link> 

        <div className="my-4">
          <Ruta icono='fa-solid fa-user' ruta='/admin/perfil' nombre='Perfil' usuario={user} />
          <Ruta icono='fa-solid fa-car-side' ruta='/admin/vehiculos' nombre='Vehiculos' />
          <Ruta icono='fa-solid fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
          <Ruta icono='fa-solid fa-users' ruta='/admin/usuarios' nombre='Usuarios' />             
        </div>      
        <button 
        onClick={() =>cerrarSesion() }
        className="bg-violet-600 p-2 text-white rounded-lg shadow-md hover:bg-violet-700">
          Cerrar Sesión
        </button>
      </nav>
      

    
  );
};

const Ruta =({icono,ruta,nombre, usuario})=> {
  

  const isActive = useActiveRoute(ruta);

  return (
    <Link to={ruta}>
      <button className={`flex items-center p-1 my-4 bg-${isActive?'violet-700':'gray-900'} text-white w-full rounded-md hover:bg-violet-900`}>
      {/* linea de codigo para mostrat foto y nombre del usuario, con datos que devuelve user */}
      {usuario ? (
        <>
        <img src={usuario.picture} className='h-5 w-5 rounded-full'/>
        {usuario.name}
        </>
      ):(
        <>
         <i className={`${icono} w-10`}></i> {nombre}
        </>

      )}
      </button>

    </Link>
  );
};


export default Sidebar;