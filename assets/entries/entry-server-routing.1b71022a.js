import{s as p,d,t as c,r as o,k as u,D as _,u as f,m as v,P as y,Q as h,N as m,M as E}from"../chunks/chunk-ec9354a1.js";import{_ as s}from"../chunks/chunk-40e4fadb.js";const i={},x={},F={},C={},P=[],R={},b=!0,L=[],w={onBeforeRoute:null},O=Object.assign({"/src/pages/all.page.tsx":()=>s(()=>import("./src_pages_all.page.55b9f784.js"),["assets/entries/src_pages_all.page.55b9f784.js","assets/chunks/chunk-2c1c0bca.js","assets/chunks/chunk-40e4fadb.js","assets/chunks/chunk-4b1ad6f3.js","assets/chunks/chunk-dca150be.js"]),"/src/pages/index.page.tsx":()=>s(()=>import("./src_pages_index.page.f009c292.js"),["assets/entries/src_pages_index.page.f009c292.js","assets/chunks/chunk-2c1c0bca.js","assets/chunks/chunk-40e4fadb.js","assets/chunks/chunk-4b1ad6f3.js","assets/chunks/chunk-dca150be.js"]),"/src/renderer/_error.page.tsx":()=>s(()=>import("./src_renderer_error.page.b94a4595.js"),["assets/entries/src_renderer_error.page.b94a4595.js","assets/chunks/chunk-4b1ad6f3.js"])}),S={...O};i[".page"]=S;const z=Object.assign({"/src/renderer/_default.page.client.tsx":()=>s(()=>import("./src_renderer_default.page.client.24f9222d.js"),["assets/entries/src_renderer_default.page.client.24f9222d.js","assets/chunks/chunk-4b1ad6f3.js","assets/chunks/chunk-dca150be.js"])}),A={...z};i[".page.client"]=A;const H=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:b,neverLoaded:R,pageConfigGlobal:w,pageConfigs:L,pageFilesEager:x,pageFilesExportNamesEager:C,pageFilesExportNamesLazy:F,pageFilesLazy:i,pageFilesList:P},Symbol.toStringTag,{value:"Module"}));p(H);const g=d({withoutHash:!0});async function I(){const e=c();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await j(e._pageId)),T(),e}function T(){const e=d({withoutHash:!0});u(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function j(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await f(t,l,e)),t.filter(r=>r.fileType!==".page.server").forEach(r=>{var n;v(!(!((n=r.fileExports)===null||n===void 0)&&n.onBeforeRender),`\`export { onBeforeRender }\` of ${r.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y();h(!0);B();async function B(){var e,a;const t=await I();await m(t,!1),E(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
