import { renderToStream } from 'react-streaming/server';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';

import { StaticRouter } from 'react-router-dom/server';
import { getPageTitle } from './context/usePageContext';
import type { PageContextServer } from './types';
import { PageContextProvider } from './context/usePageContext';


import App from '@/app/App';

export const passToClient = ['pageProps', 'documentProps', 'someAsyncProps'];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlPathname } = pageContext;

  //

  const stream = await renderToStream(
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <StaticRouter location={urlPathname}>
          <App>
            <Page {...pageProps} />
          </App>
        </StaticRouter>
      </PageContextProvider>
    </React.StrictMode>,
    // We don't need react-streaming for this app. (We use it merely to showcase that VPS can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  );

  const title = getPageTitle(pageContext);
  
  const documentHtml = escapeInject`<!DOCTYPE html>

    <html data-theme="light">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>${title}</title>
      </head>
      <body>


        <div id="page-view">${stream}</div>

          

      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
}
