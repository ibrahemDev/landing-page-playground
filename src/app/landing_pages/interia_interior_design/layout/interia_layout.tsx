import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';



const InteriaLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Outlet />
    </>
  )
}



export default InteriaLayout;