import React  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getPageTitle } from './context/usePageContext';
import type { PageContextClient } from './types';
import { PageContextProvider } from './context/usePageContext';


import App from '@/app/App';


let root: ReactDOM.Root;


export async function render(pageContext: PageContextClient) {


  const { Page, pageProps } = pageContext;
  const page = (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <BrowserRouter>
     
          <App>
            <Page {...pageProps} />
          </App>

        </BrowserRouter>
      </PageContextProvider>
    </React.StrictMode>
  );

  const container = document.getElementById('page-view')!;

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }

  document.title = getPageTitle(pageContext);
}


export const onHydrationEnd = () => {}
export const onPageTransitionStart = () => {}
export const onPageTransitionEnd = () => {}


export const clientRouting = true;
export const hydrationCanBeAborted = true;
