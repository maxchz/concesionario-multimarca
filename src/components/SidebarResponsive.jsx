import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const SidebarResponsive = () => {

    const [mostrarNavegacion, setMostrarNavegacion]= useState(false);

  return (
    <div className='md:hidden p-auto' onClick={()=>{
        setMostrarNavegacion(!mostrarNavegacion);
    }}>
        <i className={`fa-solid fa-${mostrarNavegacion?'xmark':'bars'} hover:text-yellow-600 mx-2 mt-2`}></i>
        {mostrarNavegacion && (
           <ul className='bg-gray-900 '>
            <ResponsiveRoute ruta='/admin/perfil' nombre='Perfil'/>
            <ResponsiveRoute ruta='/admin/vehiculos' nombre='Vehiculos'/>
            <ResponsiveRoute ruta='/admin/ventas' nombre='Ventas'/>
            <ResponsiveRoute ruta='/admin/usuarios' nombre='Usuarios'/>         
           </ul>
        )}

    </div>
  );
};

const ResponsiveRoute =({ruta,nombre})=>{
    return (
     <Link to={ruta}>
        <li className='text-white border border-gray-400 px-2 py-4 text-center  '>{nombre}</li>
     </Link>
    )
}

export default SidebarResponsive;