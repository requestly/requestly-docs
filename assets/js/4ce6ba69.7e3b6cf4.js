"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[4877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(64894),l=n(31);const s={sidebar_position:12,title:"Pinning Rules"},u=void 0,a={unversionedId:"features/pinning-rules",id:"features/pinning-rules",title:"Pinning Rules",description:"",source:"@site/docs/browser-extension/firefox/features/pinning-rules.mdx",sourceDirName:"features",slug:"/features/pinning-rules",permalink:"/browser-extension/firefox/features/pinning-rules",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/features/pinning-rules.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Pinning Rules"},sidebar:"tutorialSidebar",previous:{title:"Map Local",permalink:"/browser-extension/firefox/features/map-local"},next:{title:"Modify GraphQL Response",permalink:"/browser-extension/firefox/features/mock-graphql-response"}},c={},p=[],f={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{platform:i.iw.FIREFOX,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},31:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",null," \ud83d\udccc Pin your Rules "),(0,o.kt)("p",null,"You can pin your rules and access them without opening the app by clicking on the Requestly icon present on the Chrome toolbar. You can turn your pinned rules on or off directly from the toolbar.\n\u200d"),(0,o.kt)("h3",null," How to pin "),"Hover your mouse over the rule you want to pin. On the right side, you\u2019ll see the option of \u2018Pin Rule\u2019. Click on the option to pin your rule.  ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/docs/pin-rules.png",width:"800",align:"centre",alt:"List of Rules"}),(0,o.kt)("h3",null," Access your pinned rules "),(0,o.kt)("p",null,"You can use click on Requestly icon in toolbar to access your pinned rules and toggle them on/off with just one click! "),(0,o.kt)("img",{src:"/img/docs/pinned-rules.png",width:"700",align:"centre",alt:"Pinned Rules"}),(0,o.kt)("br",null)," ",(0,o.kt)("br",null),(0,o.kt)("p",null,"Quick and convenient \u26a1\ufe0f"))}l.isMDXComponent=!0}}]);