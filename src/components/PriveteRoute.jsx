import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';



const PriveteRoute = ({children}) => {
    const { isAuthenticated, isLoading,loginWithRedirect, getAccessTokenSilently  } = useAuth0();

    useEffect(()=>{

      const  fetchAuth0Token=async ()=>{

        // Para hacer validacion con el token

        // if (localStorage.getItem('token')){
        //   //validar fecha de expiracion del token
        // }else{
        //   //pedir el token nuevamente
        // }


        const accessToken= await getAccessTokenSilently({
          audience:`api-auth-concesionario`,
      });
      //guardo el token en el local storage del usuario
      localStorage.setItem('token', accessToken);
      // console.log(accessToken);
      };
      
      if(isAuthenticated){
        fetchAuth0Token();
      }
    },[isAuthenticated, getAccessTokenSilently]);
    
    if(isLoading){
        return <div className='flex flex-col justify-center items-center'>
          <ReactLoading type='spokes' color='#AA17C8' height={100} width={100}/>
          </div>
    };
     return isAuthenticated ?
      (<>{children}</>
      ):(
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-9xl text-red-500 mb-10">No estas autorizado para ver este sitio</div>
        <Link to='/'><span className="text-2xl text-blue-700 mt-10 underline">Volver a Home</span></Link>
      </div>    
      )
  
};

export default PriveteRoute;