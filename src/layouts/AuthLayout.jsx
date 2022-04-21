import React from 'react';
import {Link} from 'react-router-dom';
import {FaHome}  from "react-icons/fa";
import ImagenLogo from 'components/ImagenLogo';

const AuthLayout = ({children}) => {
  return (

    <div>

      <Link to="/">
        <div className="flex justify-start ml-5 mt-5 h-[25px]">
          <FaHome className="fill-violet-500 hover:fill-violet-200  w-auto h-full duotone"/>
        </div>
      </Link>

      <div className="flex justify-center w-full ">
        <ImagenLogo/>
      </div>

      


      <div className="flex flex-col items-center justify-center  px-5 pt-0">    
        <div className="flex w-full">
          {children}
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;