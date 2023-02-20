"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(64894),a=r(85755);const l={sidebar_position:4,title:"Create First Rule"},s=void 0,c={unversionedId:"getting-started/create-first-rule",id:"getting-started/create-first-rule",title:"Create First Rule",description:"",source:"@site/docs/browser-extension/firefox/getting-started/create-first-rule.mdx",sourceDirName:"getting-started",slug:"/getting-started/create-first-rule",permalink:"/browser-extension/firefox/getting-started/create-first-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/getting-started/create-first-rule.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Create First Rule"},sidebar:"tutorialSidebar",previous:{title:"Inspect Traffic",permalink:"/browser-extension/firefox/getting-started/inspect-traffic"},next:{title:"Understanding different Rule Types",permalink:"/browser-extension/firefox/http-modifications/overview"}},u={},p=[],f={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.FIREFOX,mdxType:"CreateFirstRule"}))}d.isMDXComponent=!0},85755:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To Create your first rule, go to ",(0,o.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules/create"},"Requestly Dashboard"),"."),(0,o.kt)("li",{parentName:"ol"},"Select which type of rule you want to create. Learn about different types of rules from ",(0,o.kt)("a",{parentName:"li",href:"../http-modifications/overview"},"here"),".",(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/docs/rules-list.png",alt:"Rules list"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Different types of rules")))),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Create Rule"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill in the details for the rule and click on ",(0,o.kt)("strong",{parentName:"li"},"Create Rule"),". Now you are good to go.")),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/docs/google-to-ddg-rule.png",alt:"google to ddg rule"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Redirect Rule - Google to Ddg"))))}a.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}}}]);