import{r as u}from"./chunk-4b1ad6f3.js";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var E;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(E||(E={}));const D="popstate";function Ie(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:s,hash:a}=r.location;return O("",{pathname:o,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:V(l)}return J(t,n,null,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function j(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G(){return Math.random().toString(36).substr(2,8)}function N(e,t){return{usr:e.state,key:e.key,idx:t}}function O(e,t,n,r){return n===void 0&&(n=null),b({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||G()})}function V(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function J(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,a=E.Pop,i=null,c=d();c==null&&(c=0,s.replaceState(b({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function m(){a=E.Pop;let f=d(),g=f==null?null:f-c;c=f,i&&i({action:a,location:h.location,delta:g})}function v(f,g){a=E.Push;let C=O(h.location,f,g);n&&n(C,f),c=d()+1;let I=N(C,c),w=h.createHref(C);try{s.pushState(I,"",w)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(w)}o&&i&&i({action:a,location:h.location,delta:1})}function y(f,g){a=E.Replace;let C=O(h.location,f,g);n&&n(C,f),c=d();let I=N(C,c),w=h.createHref(C);s.replaceState(I,"",w),o&&i&&i({action:a,location:h.location,delta:0})}function p(f){let g=l.location.origin!=="null"?l.location.origin:l.location.href,C=typeof f=="string"?f:V(f);return x(g,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,g)}let h={get action(){return a},get location(){return e(l,s)},listen(f){if(i)throw new Error("A history only accepts one active listener");return l.addEventListener(D,m),i=f,()=>{l.removeEventListener(D,m),i=null}},createHref(f){return t(l,f)},createURL:p,encodeLocation(f){let g=p(f);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:y,go(f){return s.go(f)}};return h}var W;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(W||(W={}));function K(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?U(t):t,l=F(r.pathname||"/",n);if(l==null)return null;let o=_(e);Q(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=le(o[a],ie(l));return s}function _(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,s,a)=>{let i={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};i.relativePath.startsWith("/")&&(x(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(r.length));let c=P([r,i.relativePath]),d=n.concat(i);o.children&&o.children.length>0&&(x(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ne(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,s);else for(let i of A(o.path))l(o,s,i)}),t}function A(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let s=A(r.join("/")),a=[];return a.push(...s.map(i=>i===""?o:[o,i].join("/"))),l&&a.push(...s),a.map(i=>e.startsWith("/")&&i===""?"/":i)}function Q(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:re(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const X=/^:\w+$/,Y=3,Z=2,H=1,ee=10,te=-2,T=e=>e==="*";function ne(e,t){let n=e.split("/"),r=n.length;return n.some(T)&&(r+=te),t&&(r+=Z),n.filter(l=>!T(l)).reduce((l,o)=>l+(X.test(o)?Y:o===""?H:ee),r)}function re(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function le(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],i=s===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",d=oe({path:a.relativePath,caseSensitive:a.caseSensitive,end:i},c);if(!d)return null;Object.assign(r,d.params);let m=a.route;o.push({params:r,pathname:P([l,d.pathname]),pathnameBase:ue(P([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=P([l,d.pathnameBase]))}return o}function oe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ae(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,d,m)=>{if(d==="*"){let v=a[m]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[d]=se(a[m]||"",d),c},{}),pathname:o,pathnameBase:s,pattern:e}}function ae(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),j(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ie(e){try{return decodeURI(e)}catch(t){return j(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function se(e,t){try{return decodeURIComponent(e)}catch(n){return j(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function F(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const P=e=>e.join("/").replace(/\/\/+/g,"/"),ue=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function ce(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const k=["post","put","patch","delete"];new Set(k);const de=["get",...k];new Set(de);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}const he=u.createContext(null),fe=u.createContext(null),q=u.createContext(null),B=u.createContext(null),R=u.createContext({outlet:null,matches:[],isDataRoute:!1}),z=u.createContext(null);function S(){return u.useContext(B)!=null}function me(){return S()||x(!1),u.useContext(B).location}const pe=u.createContext(null);function ge(e){let t=u.useContext(R).outlet;return t&&u.createElement(pe.Provider,{value:e},t)}function Le(e,t){return ve(e,t)}function ve(e,t,n){S()||x(!1);let{navigator:r}=u.useContext(q),{matches:l}=u.useContext(R),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let i=me(),c;if(t){var d;let h=typeof t=="string"?U(t):t;a==="/"||(d=h.pathname)!=null&&d.startsWith(a)||x(!1),c=h}else c=i;let m=c.pathname||"/",v=a==="/"?m:m.slice(a.length)||"/",y=K(e,{pathname:v}),p=Pe(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:P([a,r.encodeLocation?r.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?a:P([a,r.encodeLocation?r.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),l,n);return t&&p?u.createElement(B.Provider,{value:{location:$({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:E.Pop}},p):p}function xe(){let e=Ue(),t=ce(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:l},n):null,o)}const ye=u.createElement(xe,null);class Ce extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(R.Provider,{value:this.props.routeContext},u.createElement(z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ee(e){let{routeContext:t,match:n,children:r}=e,l=u.useContext(he);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(R.Provider,{value:t},r)}function Pe(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));a>=0||x(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,i,c)=>{let d=i.route.id?s==null?void 0:s[i.route.id]:null,m=null;n&&(m=i.route.errorElement||ye);let v=t.concat(o.slice(0,c+1)),y=()=>{let p;return d?p=m:i.route.Component?p=u.createElement(i.route.Component,null):i.route.element?p=i.route.element:p=a,u.createElement(Ee,{match:i,routeContext:{outlet:a,matches:v,isDataRoute:n!=null},children:p})};return n&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?u.createElement(Ce,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var M=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(M||{});function Re(e){let t=u.useContext(fe);return t||x(!1),t}function we(e){let t=u.useContext(R);return t||x(!1),t}function be(e){let t=we(),n=t.matches[t.matches.length-1];return n.route.id||x(!1),n.route.id}function Ue(){var e;let t=u.useContext(z),n=Re(M.UseRouteError),r=be(M.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Oe(e){return ge(e.context)}function $e(e){let{basename:t="/",children:n=null,location:r,navigationType:l=E.Pop,navigator:o,static:s=!1}=e;S()&&x(!1);let a=t.replace(/^\/*/,"/"),i=u.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=U(r));let{pathname:c="/",search:d="",hash:m="",state:v=null,key:y="default"}=r,p=u.useMemo(()=>{let h=F(c,a);return h==null?null:{location:{pathname:h,search:d,hash:m,state:v,key:y},navigationType:l}},[a,c,d,m,v,y,l]);return p==null?null:u.createElement(q.Provider,{value:i},u.createElement(B.Provider,{children:n,value:p}))}new Promise(()=>{});export{Oe as O,$e as R,Ie as c,Le as u};
