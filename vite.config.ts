import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';
import * as path from 'path'
export default {
  server: {
    cors: true
  },
  base:"/landing-page-playground/",
  plugins: [
    react({
      jsxImportSource: '@emotion/react',

      include:".+\.(jsx|tsx)",
      babel: {
        plugins: [
          //"babel-plugin-twin",
          'babel-plugin-macros',
          
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
      },
    }),
    //mdx(),
    ssr({
      prerender: true,
      
    }),
    viteCompression({
      algorithm:"brotliCompress",
      threshold:1
    }),
    viteCompression({
      algorithm:"gzip",
      threshold:1
    }),
    
  ],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  // (The 'react/jsx-runtime' entry is not needed in Vite 3 anymore.)
  optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
} as UserConfig