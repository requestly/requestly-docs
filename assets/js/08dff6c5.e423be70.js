"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[4360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),l=r(90837);const s={sidebar_position:11,title:"Map Local"},i=void 0,p={unversionedId:"features/map-local",id:"features/map-local",title:"Map Local",description:"",source:"@site/docs/browser-extension/edge/features/map-local.mdx",sourceDirName:"features",slug:"/features/map-local",permalink:"/browser-extension/edge/features/map-local",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/features/map-local.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Map Local"},sidebar:"tutorialSidebar",previous:{title:"Map Remote",permalink:"/browser-extension/edge/features/map-remote"},next:{title:"Pinning Rules",permalink:"/browser-extension/edge/features/pinning-rules"}},c={},u=[],m={toc:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{platform:a.iw.EDGE,mdxType:"Component"}))}f.isMDXComponent=!0},90837:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Use cases",id:"use-cases",level:2},{value:"How to use",id:"how-to-use",level:2}]};function l(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature enables you to serve any local file as the response of an intercepted request.\nYou can make changes in the file locally and test them live without updating them on the server.\nThe contents of the local file is returned to the client as if it was the normal remote response."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"You can use this feature for testing CSS, images, JavaScript assets, etc. by mapping the local development files\nto the live version, allowing you to browse the actual site with your development assets without deployment."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Local mapping is only available on the ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/downloads"},"Requestly desktop app "),",\nbut you can set up a local server to serve local files using a redirect rule. To do this, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/http-server"},"http server")," npm package."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the directory from where you want to serve the files."),(0,o.kt)("li",{parentName:"ol"},"Run the command: ",(0,o.kt)("inlineCode",{parentName:"li"},"http-server --cors -p 8081"))),(0,o.kt)("p",null,"This will serve the contents of the directory through localhost:8081, and the URL of the locally served file can be used\nas the destination in the redirect rule."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Find a demo video ",(0,o.kt)("a",{parentName:"p",href:"https://youtube.com/watch?v=85GVaOWTnlE"},"here."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Requestly desktop app offers convenient one-click support for mapping local system files, eliminating the need for a local HTTP server. ",(0,o.kt)("a",{parentName:"p",href:"/desktop-app/mac/features/map-local"},"Learn More"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Using redirect rule for local mapping",src:r(44482).Z,width:"1782",height:"632"})))}l.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},44482:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirect-rule-local-map-399462a8328cf3425b4518e7929c2641.png"}}]);