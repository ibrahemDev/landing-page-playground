/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly NODE_ENV:"development"|"production"


  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
