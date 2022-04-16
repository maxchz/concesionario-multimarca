import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-red-400'>
      <ul className="flex w-full justify-between my-5">
        <li>Logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>Navegacion3</li>
        <li className="px-5">
          <Link to='/login'>
            <button className="bg-violet-700 p-2 text-white rounded-lg shadow-md hover:bg-violet-500">
              Iniciar Sesión
            </button>
          </Link>
          
        </li>

      </ul>
        

    </nav>
  )
}

export default Navbar;