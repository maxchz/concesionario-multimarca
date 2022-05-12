import React from 'react';
import {useUser} from 'context/userContext';


// de acuerdo a los roles de roleList le muestro al usuario los children o un componente vacio
const PriveteRoute = ({roleList, children}) => {

    const {userData}=useUser();
    // console.log("userData en el private component", userData);

    //Caso rol de admin
    if (roleList.includes(userData.rol)){
        return children;
    }
    return <div className="text-9xl text-red-500 flex justify-center">No estas autorizado para ver este sitio</div>
 };

export default PriveteRoute;