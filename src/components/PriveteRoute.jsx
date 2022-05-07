import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const PriveteRoute = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>;
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