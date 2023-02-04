"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[9523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),s=r(78687);const i={sidebar_position:11,title:"Map Local"},l=void 0,p={unversionedId:"features/map-local",id:"features/map-local",title:"Map Local",description:"",source:"@site/docs/desktop-app/windows/features/map-local.mdx",sourceDirName:"features",slug:"/features/map-local",permalink:"/desktop-app/windows/features/map-local",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/windows/features/map-local.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Map Local"},sidebar:"tutorialSidebar",previous:{title:"Map Remote",permalink:"/desktop-app/windows/features/map-remote"},next:{title:"Pinning Rules",permalink:"/desktop-app/windows/features/pinning-rules"}},c={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.ZP,{platform:a.iw.WINDOWS,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},78687:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Use cases",id:"use-cases",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Matching Requests",id:"matching-requests",level:2}]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature enables you to serve any local file as the response of an intercepted request.\nYou can make changes in the file locally and test them live without updating them on the server.\nThe contents of the local file is returned to the client as if it was the normal remote response."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"You can use it for testing css, images, javascript assets etc. by mapping the local development file to the live version so that you can browse\nthe actual site with the development assets without deploying."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/redirect-rule"},"Redirect rule")," to map a request to a local file.\nThis redirects the request to the local file, causing it to be served in response to that request."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Using redirect rule for local mapping",src:r(44482).Z,width:"1782",height:"632"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Refer ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/blog/how-to-load-local-js-files-on-live-production-sites"},"this blog")," for detailed explanation.")),(0,o.kt)("h2",{id:"matching-requests"},"Matching Requests"),(0,o.kt)("p",null,"All the Requestly rules can match requests based on URL, host, path and ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/rule-operators"},"rule operators"),". With the help of these operators you\ncan define rules to match using wildcard, regular expressions or string matching. You can also perform ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/advance-targetting"},"advanced targeting")," on the requests using source filters."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This feature is only available in the ",(0,o.kt)("a",{parentName:"em",href:"https://requestly.io/downloads"},"Requestly Desktop App "),".")))}s.isMDXComponent=!0},44482:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirect-rule-local-map-399462a8328cf3425b4518e7929c2641.png"}}]);