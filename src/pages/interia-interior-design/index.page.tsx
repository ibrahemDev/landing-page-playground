import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';
import AllRoutes from '@/app/routes/routes';
// export default { Page }


export const documentProps = {
  title: 'interia interior design - Landing page',
  description: '',
  headerTitleKey:"interia interior design - Landing page",
};

export const Page = () =>{
  return (<AllRoutes />);
}
