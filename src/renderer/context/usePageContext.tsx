import React, { useContext,createContext, PropsWithChildren } from 'react';
import type { PageContext } from '../types';

const PageContext = createContext<PageContext>(undefined as any);

export const PageContextProvider:React.FC<PropsWithChildren<{
  pageContext: PageContext;
  children: React.ReactNode;
}>> = ({children, pageContext,}) => {
  return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>;
}

export const usePageContext = () => {
  const pageContext = useContext(PageContext);
  return pageContext;
}



export const getPageTitle = (pageContext: {
  exports: { documentProps?: { title: string } };
  documentProps?: { title: string };
}) => {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    'landing-page-playground';
  return title;
}