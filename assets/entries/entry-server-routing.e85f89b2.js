import{s as c,d,t as p,r as o,k as u,D as f,u as _,m as y,P as v,Q as h,N as m,M as E}from"../chunks/chunk-ec9354a1.js";import{_ as r}from"../chunks/chunk-40e4fadb.js";const i={},F={},x={},C={},b=[],P={},R=!0,w=[],L={onBeforeRoute:null},S=Object.assign({"/src/pages/all.page.tsx":()=>r(()=>import("./src_pages_all.page.6247e7ba.js"),["assets/entries/src_pages_all.page.6247e7ba.js","assets/chunks/chunk-487bc8d0.js","assets/chunks/chunk-40e4fadb.js","assets/chunks/chunk-34c2d97f.js"]),"/src/pages/index.page.tsx":()=>r(()=>import("./src_pages_index.page.8cbd2ecb.js"),["assets/entries/src_pages_index.page.8cbd2ecb.js","assets/chunks/chunk-487bc8d0.js","assets/chunks/chunk-40e4fadb.js","assets/chunks/chunk-34c2d97f.js"])}),z={...S};i[".page"]=z;const H=Object.assign({"/src/renderer/_default.page.client.tsx":()=>r(()=>import("./src_renderer_default.page.client.26145034.js"),["assets/entries/src_renderer_default.page.client.26145034.js","assets/chunks/chunk-34c2d97f.js"])}),O={...H};i[".page.client"]=O;const A=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:R,neverLoaded:P,pageConfigGlobal:L,pageConfigs:w,pageFilesEager:F,pageFilesExportNamesEager:C,pageFilesExportNamesLazy:x,pageFilesLazy:i,pageFilesList:b},Symbol.toStringTag,{value:"Module"}));c(A);const g=d({withoutHash:!0});async function I(){const e=p();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await B(e._pageId)),j(),e}function j(){const e=d({withoutHash:!0});u(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function B(e){const a={},{pageFilesAll:t,pageConfigs:l}=await f(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await _(t,l,e)),t.filter(s=>s.fileType!==".page.server").forEach(s=>{var n;y(!(!((n=s.fileExports)===null||n===void 0)&&n.onBeforeRender),`\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}v();h(!0);T();async function T(){var e,a;const t=await I();await m(t,!1),E(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
