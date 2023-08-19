import React from 'react';
import GlobalStyles from "./GlobalStyles"




const App: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
       <GlobalStyles />
       {children}
    </>  
  )
}

export default App;