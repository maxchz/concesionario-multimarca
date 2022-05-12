import React, {useState,useEffect} from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import {obtenerDatosUsuario} from 'utils/api';
import {useUser} from 'context/userContext';


const PrivateLayout = ({children}) => {

  const { isAuthenticated, isLoading,loginWithRedirect, getAccessTokenSilently, logout  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const {setUserData} = useUser();

    useEffect(()=>{

      const  fetchAuth0Token=async ()=>{
   
       // 1-PEDIMOS TOKEN A AUTH0 DESDE REACT
       setLoadingUserInformation(true);
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
        setLoadingUserInformation(false);
        },
        (err)=>{
        console.log('err',err);
        setLoadingUserInformation(false);
        logout({ returnTo: 'http://localhost:3000/admin'});


        }
      );
    };
      // verifico si el usuario esta autentificado
      if (isAuthenticated){
        fetchAuth0Token();
      }
    }, [isAuthenticated, getAccessTokenSilently]);

    // colocamos el loading para cuando esperamos la informacion de autenticacion e la informacion del usuario
    if(isLoading || loadingUserInformation)  return <div className='flex flex-col justify-center items-center'>
    <ReactLoading type='spokes' color='#AA17C8' height={100} width={100}/>
    </div>

    if (!isAuthenticated) {
    return loginWithRedirect();
}

//import el PivateRoutr como un componente
  return (
    
      <div className="flex w-screen h-screen">
        <div className='flex flex-col  md:flex-row   h-full w-full'>
          <Sidebar/>
          <SidebarResponsive/>
          <main className="flex w-full items-center justify-center overflow-y-scroll"> 
            {children}
          </main>
        </div>  
      </div>
  );
};

export default PrivateLayout;