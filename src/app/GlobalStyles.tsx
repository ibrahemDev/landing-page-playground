import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';


const customStyles = css({
  ...css`
    *::selection {
      background: #ffffff00;
      color: #0d86ff;
    }
  `,
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased flex flex-col  transition-all`,
  },
});

//#121F26
const GlobalStyles: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <Global styles={{
        body: {
          
          ...tw`dark:bg-[#100e17] bg-[#191D1D] min-h-[100vh]`
        }
      }} />
      <Global styles={customStyles} />
      {children}
    </>
  );
}

export default GlobalStyles;
