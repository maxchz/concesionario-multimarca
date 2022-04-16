import React from 'react';
import {Link} from 'react-router-dom';
import AuthLayout from 'layouts/AuthLayout';

const Registro = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col  w-full justify-center items-center">
        <h2 className=" w-full text-center text-2xl font-medium text-violet-600">Creá tu cuenta</h2>

        <form>
          <div className="grid gap-x-4  grid-cols-2">

            <div className="flex flex-col"> 
              <label htmlFr="nombre"> <span className="pr-2">Nombre</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="text" placeholder="Max" required/>
            </div>   

            <div className="flex flex-col"> 
              <label htmlFr="apellido"> <span className="pr-2">Apellido</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="text" placeholder="Rodingher" required/>
            </div> 

            <div className="flex flex-col"> 
              <label htmlFr="telefono"> <span className="pr-2">Teléfono</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="tel" maxLength="10" placeholder="3512345678" required/>
            </div> 

            <div className="flex flex-col"> 
              <label htmlFr="fechaNacimiento"> <span className="pr-2">Fecha de Nacimiento</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="date" required/>
            </div> 

            <div className="flex flex-col"> 
              <label htmlFr="email"> <span className="pr-2">Correo eléctronico</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="email" placeholder="user@automax.com" required/>
            </div> 


            <div className="flex flex-col"> 
              <label htmlFr="contraseña"> <span className="pr-2">Contraseña</span></label>
              <input  className=" px-2 py-1 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
                focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" type="password" required/>
            </div>   

          </div>

          <div className="flex flex-col justify-between">
              <Link to="/admin">
                <button className=" bg-violet-600 h-11 p-2 mt-2 text-white font-medium rounded-lg shadow-md hover:bg-violet-400 w-full" type="submit">Regístrate</button>
              </Link>
          </div>

          <div className="flex w-full justify-between mt-2">
            <div>¿Ya tienes cuenta?</div>

            <div className="text-violet-700 hover:text-violet-500 font-medium"> 
             <Link to="/login">Iniciar Sesión</Link>
            </div>
          </div>
          
          
        </form>







      </div>
    </AuthLayout>
    
  );
};

export default Registro;