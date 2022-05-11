import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import {obtenerDatosUsuario} from 'utils/api';
import {useUser} from 'context/userContext';



const PriveteRoute = ({children}) => {
    const { isAuthenticated, isLoading,loginWithRedirect, getAccessTokenSilently  } = useAuth0();
    const {setUserData} = useUser();

    useEffect(()=>{

      const  fetchAuth0Token=async ()=>{
        // Para hacer validacion con el token
        // if (localStorage.getItem('token')){
        //   //validar fecha de expiracion del token
        // }else{
        //   //pedir el token nuevamente
        // }

       // 1-PEDIMOS TOKEN A AUTH0 DESDE REACT
        const accessToken= await getAccessTokenSilently({
          audience:`api-auth-concesionario`,
      });
      // 2- RECIBIR TOKEN DE AUTH0
      //guardo el token en el local storage del usuario
      localStorage.setItem('token', accessToken);
      console.log(accessToken);

      //3- ENVIAR TOKEN AL BACKEND
      //LLAmo a la funcion obtenerDatosUsuarios, para mandarle el token al back y saber si esta creado en la BD
      await obtenerDatosUsuario(
        (response)=>{
        console.log('response con datos del usuario', response);
        setUserData(response.data);
        },
        (err)=>{
        console.log('err',err);
        }
      );
    };
      // verifico si el usuario esta autentificado
      if (isAuthenticated){
        fetchAuth0Token();
      }
    }, [isAuthenticated, getAccessTokenSilently]);
    
    if(isLoading)  return <div className='flex flex-col justify-center items-center'>
          <ReactLoading type='spokes' color='#AA17C8' height={100} width={100}/>
          </div>

    if (!isAuthenticated) {
      return loginWithRedirect();
    }
    return <>{children}</>   
    
    
    
    //  return isAuthenticated ?
    //   (<>{children}</>
    //   ):(
    //   <div className="flex flex-col items-center justify-center">
    //     <div className="text-center text-9xl text-red-500 mb-10">No estas autorizado para ver este sitio</div>
    //     <Link to='/'><span className="text-2xl text-blue-700 mt-10 underline">Volver a Home</span></Link>
    //   </div>    
    //   )
  
};

export default PriveteRoute;