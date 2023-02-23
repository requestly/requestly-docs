"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[6366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),i=r(60061);const l={sidebar_position:1,title:"Organizing Rules"},s=void 0,u={unversionedId:"features/organizing-rules",id:"features/organizing-rules",title:"Organizing Rules",description:"",source:"@site/docs/browser-extension/opera/features/organizing-rules.mdx",sourceDirName:"features",slug:"/features/organizing-rules",permalink:"/browser-extension/opera/features/organizing-rules",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/opera/features/organizing-rules.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Organizing Rules"},sidebar:"tutorialSidebar",previous:{title:"Cancel Rule",permalink:"/browser-extension/opera/http-modifications/cancel-rule"},next:{title:"Pause Requestly",permalink:"/browser-extension/opera/features/pause-requestly"}},p={},c=[],g={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.OPERA,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},60061:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Create new group",id:"create-new-group",level:2},{value:"Move existing rule to a group",id:"move-existing-rule-to-a-group",level:2},{value:"enable/disable group",id:"enabledisable-group",level:2},{value:"ungroup existing rules in group",id:"ungroup-existing-rules-in-group",level:2}]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The real power of Requestly comes from its different types of rules. It has\nlots of different types of rules to offer which gives you complete control\nover the HTTP requests."),(0,o.kt)("p",null,"Requestly provides 10 different types of rules that you may create to override\ndefault behavior of network requests in a webpage. And to achieve some\nparticular use-case, you might have created one or more of these rules.as you\ncreate more and more rules, the list becomes too large to manage."),(0,o.kt)("p",null,"Requestly provides a feature to organize them into logical ",(0,o.kt)("strong",{parentName:"p"},"groups"),"\nand enable/disable in one go!"),(0,o.kt)("p",null,"It allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create new group"),(0,o.kt)("li",{parentName:"ul"},"move existing rules to a group"),(0,o.kt)("li",{parentName:"ul"},"enable/disable group and all its rules in one action"),(0,o.kt)("li",{parentName:"ul"},"share/export/import a group of rules"),(0,o.kt)("li",{parentName:"ul"},"ungroup existing rules in group")),(0,o.kt)("h2",{id:"create-new-group"},"Create new group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(82549).Z,width:"938",height:"108"})),(0,o.kt)("h2",{id:"move-existing-rule-to-a-group"},"Move existing rule to a group"),(0,o.kt)("p",null,"you can move the exisitng rules to group in just one click"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(86726).Z,width:"1888",height:"770"})),(0,o.kt)("h2",{id:"enabledisable-group"},"enable/disable group"),(0,o.kt)("p",null,"enable/disable rules in a group in one click"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(75666).Z,width:"2480",height:"368"})),(0,o.kt)("h2",{id:"ungroup-existing-rules-in-group"},"ungroup existing rules in group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(62999).Z,width:"2568",height:"514"})))}i.isMDXComponent=!0},75666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enable-disable-group-cd29f0d507c9ec2ef407a6b5809aa638.png"},86726:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/move-to-group-58f88a39cd7a121bbcac104d30149698.png"},82549:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new-group-1294b68312f2591537de341c741564f6.png"},62999:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ungroup-rule-037bca4f3bb584628eb6845a3de32763.png"}}]);