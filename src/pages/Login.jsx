import React from 'react';
import {Link} from 'react-router-dom';
import AuthLayout from 'layouts/AuthLayout';
import logogg from 'media/ggft.png';

const Login = () => {
  return (
    <AuthLayout>
      <div className=" flex flex-col w-full justify-center items-center ">
        <h2 className=" text-center text-2xl font-medium text-violet-600">Inicia sesión en tu cuenta</h2>
        
        <form className=" mt-5 max-w-md">
          <div>
            <input className="w-full px-3 py-1.5 mb-3 appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
            focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm" 
            type="email" placeholder="Usuario@automax.com" required  />

            <input className="w-full px-3 py-1.5  appearance-none focus:outline-none border border-gray-300 text-gray-900 rounded-md 
            focus:ring-violet-400 focus:border-violet-600 focus:z-10 sm:text-sm"
            type="password" placeholder="Contraseña" required/>
          </div>

          <div className="flex justify-between  mt-2 mb-4">
              <div>
                <label htmlFor='recuerdame'>
                  <input className="mr-3" type="checkbox"/>
                  Recuérdame
                </label>
              </div>

              <div className="text-violet-700 hover:text-violet-500 font-medium"> 
                <Link to="#">¿Olvidaste tu contraseña?</Link>
              </div>
          </div>

          <div className="flex flex-col justify-between">
              <Link to="/admin">
                <button className=" bg-violet-600 h-11 p-2 text-white font-medium rounded-lg shadow-md hover:bg-violet-400 w-full" type="submit">Inícia Sesión</button>
              </Link>
          </div>

          <div className="flex justify-between mt-2">
              <div>¿No tienes cuenta?</div>
              <div className="text-violet-700 hover:text-violet-500 font-medium"> 
                <Link to="/registro">Registrate</Link>
              </div>
          </div>
            
          <div className="border-b border-dashed border-gray-600 my-2"> </div>  


          <div className="w-full mt-5 ">
            <Link to="#">
              <button className="flex justify-center font-medium rounded-lg bg-gray-300 hover:bg-gray-200 w-full h-11 p-2 items-center">
                <img className="w-auto h-full" src={logogg} alt="logo google" />
                Continúa con Google
              </button>
            </Link>            
          </div>
          
            
          
        </form>
      </div>
    </AuthLayout>
    
  );
};

export default Login;