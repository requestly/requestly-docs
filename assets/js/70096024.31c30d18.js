"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),s=(n(67294),n(3905)),o=n(25469),i=n(34636);const a={sidebar_position:14,title:"Import/ Export Sessions"},p=void 0,l={unversionedId:"features/import-export-session",id:"features/import-export-session",title:"Import/ Export Sessions",description:"",source:"@site/docs/desktop-app/linux/features/import-export-session.mdx",sourceDirName:"features",slug:"/features/import-export-session",permalink:"/desktop-app/linux/features/import-export-session",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/import-export-session.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Import/ Export Sessions"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Support",permalink:"/desktop-app/linux/features/graphql-support"},next:{title:"Import settings from Charles Proxy",permalink:"/desktop-app/linux/features/import-settings-from-charles"}},u={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.ZP,{platform:o.iw.WINDOWS,mdxType:"Component"}))}m.isMDXComponent=!0},25469:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},34636:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),s=(n(67294),n(3905));const o={toc:[{value:"Use cases",id:"use-cases",level:3},{value:"Saving a network session",id:"saving-a-network-session",level:3},{value:"Exporting a network session",id:"exporting-a-network-session",level:3},{value:"Importing a network session",id:"importing-a-network-session",level:3}]};function i(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can save your working session for debugging purposes.\nBy saving your session, you can preserve all the debugging information, including network requests and responses, and any applied rules or modifications."),(0,s.kt)("h3",{id:"use-cases"},"Use cases"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All the apps and domain information is preserved."),(0,s.kt)("li",{parentName:"ul"},"Sharing sessions with teammates is valuable for collaborative debugging. You can share your saved session file with others, allowing them to review the same set of debugging information."),(0,s.kt)("li",{parentName:"ul"},"You can review network requests, inspect response payloads, and analyze the sequence of events during the debugging session."),(0,s.kt)("li",{parentName:"ul"},"The sessions can be revisited later for analysis, knowledge sharing, or future reference.")),(0,s.kt)("h3",{id:"saving-a-network-session"},"Saving a network session"),(0,s.kt)("p",null,"You can save a network session from the traffic table."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"save network session",src:n(76891).Z,width:"2768",height:"1050"})),(0,s.kt)("p",null,"The saved sessions can be managed from the sidebar."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"manage network session",src:n(69542).Z,width:"516",height:"396"})),(0,s.kt)("h3",{id:"exporting-a-network-session"},"Exporting a network session"),(0,s.kt)("p",null,"A nework session can be exported to HAR ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HAR_(file_format)"},"(HTTP archive)")," file. It is supported by all the network analyzer apps."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"export network session",src:n(16252).Z,width:"2770",height:"1112"})),(0,s.kt)("h3",{id:"importing-a-network-session"},"Importing a network session"),(0,s.kt)("p",null,"A network session containing a HAR file can be imported from the session list in the sidebar.\nYou can import a HAR file and view the sessions from the session viewer."))}i.isMDXComponent=!0},16252:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export-session-5876d391dda08345c3ef3c0ae89d0ebd.png"},69542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/manage-session-05fa5ad14da7fc60212216934f9d2dc3.png"},76891:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/save-session-603d461ec77387577bf96e59cb39d0be.png"}}]);