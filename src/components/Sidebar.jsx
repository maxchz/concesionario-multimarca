import React from 'react';
import {Link} from 'react-router-dom';
import ImagenLogo from 'components/ImagenLogo';



const Sidebar = () => {
  return ( 
      <nav className=" hidden md:flex  flex-col w-72 border border-gray-350 bg-violet-300 p-4  ">
        <Link to='/admin'>
          <div>
            <ImagenLogo/>
          </div>
        </Link> 

        <div className="my-4">
          <Ruta icono='fa-solid fa-user' ruta='/admin/perfil' nombre='Perfil' />
          <Ruta icono='fa-solid fa-car-side' ruta='/admin/vehiculos' nombre='Vehiculos' />
          <Ruta icono='fa-solid fa-cash-register' ruta='/admin/ventas' nombre='Ventas' />
          <Ruta icono='fa-solid fa-users' ruta='/admin/usuarios' nombre='Usuarios' />             
        </div>      
        <button>Cerrar Sesión</button>
      </nav>
      

    
  );
};

const Ruta =({icono,ruta,nombre})=> {
  return (
    <Link to={ruta}>
      <button className="flex items-center p-1 my-4 bg-violet-700 text-white w-full rounded-md hover:bg-violet-900">
      <i className={`${icono} w-10`}></i> {nombre}</button>

    </Link>
  );
};


export default Sidebar;