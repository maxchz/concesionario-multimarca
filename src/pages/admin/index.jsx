import React from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import {useDarkMode} from 'context/darkMode';


const Admin = () => {
  const {darkMode}= useDarkMode();

  return (
    <PrivateLayout>
      <div className={`flex h-full w-full bg-gray-${darkMode ? "900":"50"}`}>Contenido </div> 
    </PrivateLayout>    
  );
};

export default Admin;