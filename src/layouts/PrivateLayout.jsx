import React from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import PriveteRoute from 'components/PriveteRoute';


const PrivateLayout = ({children}) => {


//import el PivateRoutr como un componente
  return (
    <PriveteRoute>
      <div className="flex w-screen h-screen">
        <div className='flex flex-col  md:flex-row   h-full w-full'>
          <Sidebar/>
          <SidebarResponsive/>
          <main className="flex w-full items-center justify-center overflow-y-scroll"> 
            {children}
          </main>
        </div>  
      </div>
    </PriveteRoute>  
  );
};

export default PrivateLayout;