import React from 'react';
import { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import AllRoutes from '@/app/routes/routes';

export async function onBeforeRender(pageContext: PageContextBuiltIn) {

  return {
    pageContext: {
      pageProps: {},
      documentProps: {
        title: 'landing-page-playground',
      },
    },
  };
}

export const documentProps = {
  title: 'landing-page-playground',
  description: '',
};
function Page() {
  return <AllRoutes />;
}

export { Page };
