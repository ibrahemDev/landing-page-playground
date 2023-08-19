import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';
import AllRoutes from '@/app/routes/routes';
// export default { Page }


export const documentProps = {
  title: 'Home Page',
  description: '',
  headerTitleKey:"HomePage",
};

export const Page = () =>{
  return (<AllRoutes />);
}
