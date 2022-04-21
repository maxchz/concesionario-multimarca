import React from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';

const PrivateLayout = ({children}) => {
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