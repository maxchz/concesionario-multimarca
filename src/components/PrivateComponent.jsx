import React from 'react';
import {useUser} from 'context/userContext';


// de acuerdo a los roles de roleList le muestro al usuario los children o un componente vacio
const PrivateComponent = ({roleList, children}) => {

    const {userData}=useUser();
    // console.log("userData en el private component", userData);

    //Caso rol de admin
    if (roleList.includes(userData.rol)){
        return children;
    }
    return <></>
 };

export default PrivateComponent;