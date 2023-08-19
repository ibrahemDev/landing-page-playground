/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV:"development"|"production"


  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
