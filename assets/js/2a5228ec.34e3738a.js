"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=i(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||y[f]||s;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,u=new Array(s);u[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,u[1]=a;for(var i=2;i<s;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),s=r(25469),u=r(59976);const a={sidebar_position:5,title:"Pause Requestly"},l=void 0,i={unversionedId:"features/pause-requestly",id:"features/pause-requestly",title:"Pause Requestly",description:"",source:"@site/docs/browser-extension/edge/features/pause-requestly.mdx",sourceDirName:"features",slug:"/features/pause-requestly",permalink:"/browser-extension/edge/features/pause-requestly",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/features/pause-requestly.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Pause Requestly"},sidebar:"tutorialSidebar",previous:{title:"Organizing Rules",permalink:"/browser-extension/edge/features/organizing-rules"},next:{title:"Rule Operators",permalink:"/browser-extension/edge/features/rule-operators"}},p={},c=[],y={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.ZP,{platform:s.iw.EDGE,mdxType:"Component"}))}f.isMDXComponent=!0},59976:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={toc:[{value:"Pause Requestly:",id:"pause-requestly",level:3},{value:"Resume Requestly",id:"resume-requestly",level:3}]};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To prevent Requestly rules from intercepting and modifying the requests of your websites, you can pause the Requestly extension temporarily.\nIt will be handy when you want to test the original behaviour of your website without affecting your Requestly rules."),(0,o.kt)("h3",{id:"pause-requestly"},"Pause Requestly:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the Requestly icon on the browser's toolbar."),(0,o.kt)("li",{parentName:"ol"},"Click on the toggle button which says ",(0,o.kt)("strong",{parentName:"li"},"Requestly running"),". ",(0,o.kt)("br",null))),(0,o.kt)("img",{width:"75%",alt:"Pause requestly from popup",src:"/img/docs/pause-requestly.gif"}),(0,o.kt)("h3",{id:"resume-requestly"},"Resume Requestly"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the Requestly icon on the browser's toolbar."),(0,o.kt)("li",{parentName:"ol"},"Click on the toggle button which says ",(0,o.kt)("strong",{parentName:"li"},"Requestly paused"),".")),(0,o.kt)("img",{width:"75%",alt:"Pause requestly from popup",src:"/img/docs/resume-requestly.gif"}))}u.isMDXComponent=!0},25469:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}}}]);