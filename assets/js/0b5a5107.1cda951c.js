"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(64894),i=n(52029);const s={sidebar_position:3,title:"Inspect Traffic"},p=void 0,l={unversionedId:"getting-started/inspect-traffic",id:"getting-started/inspect-traffic",title:"Inspect Traffic",description:"",source:"@site/docs/desktop-app/mac/getting-started/inspect-traffic.mdx",sourceDirName:"getting-started",slug:"/getting-started/inspect-traffic",permalink:"/desktop-app/mac/getting-started/inspect-traffic",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/getting-started/inspect-traffic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Inspect Traffic"},sidebar:"tutorialSidebar",previous:{title:"NodeJS",permalink:"/desktop-app/mac/getting-started/setup/nodejs"},next:{title:"Create First Rule",permalink:"/desktop-app/mac/getting-started/create-first-rule"}},c={},u=[],f={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{platform:o.iw.MAC,mdxType:"InspectTraffic"}))}d.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},52029:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[{value:"How to Use",id:"how-to-use",level:2}]};function i(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Requestly's ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Traffic")," provides you with a powerful tool for\ninspecting and analyzing network traffic, allowing you to\nidentify potential issues and optimize your application's performance."),(0,a.kt)("p",null,"Inspecting network traffic is an important aspect of developing and\nmaintaining a high-performance, reliable application. It can be difficult to\neffectively monitor and analyze network requests and responses, leading to problems\nlike slow page load times, error messages, etc."),(0,a.kt)("p",null,"With Requestly's network traffic tool, you can monitor network incoming and\noutgoing traffic. You can gain insight into important details such as :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL"),(0,a.kt)("li",{parentName:"ul"},"HTTP method (e.g. GET, POST, etc.) used for the request"),(0,a.kt)("li",{parentName:"ul"},"request and response headers"),(0,a.kt)("li",{parentName:"ul"},"response payload"),(0,a.kt)("li",{parentName:"ul"},"timing information and more")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"network traffic table",src:n(11620).Z,width:"2392",height:"1372"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("p",null,"Here's how you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Traffic")," table to inspect network requests and responses in your app:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Requestly desktop app"),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Network Traffic"),", click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Connect App")),(0,a.kt)("li",{parentName:"ol"},"Select your preferred system app\n",(0,a.kt)("img",{alt:"network traffic table",src:n(26754).Z,width:"2178",height:"1050"}),"\nfor example, lets open a ",(0,a.kt)("strong",{parentName:"li"},"new")," Chrome browser instance."),(0,a.kt)("li",{parentName:"ol"},"Your network traffic table will now get populated with network requests and\nresponses as you visit any page on your selected system app.")))}i.isMDXComponent=!0},26754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/system-apps-9bdf97ae9cf8b462a026391c328dc222.png"},11620:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/traffic-table-9830e5273839879e24a41c4d7cf80eed.png"}}]);