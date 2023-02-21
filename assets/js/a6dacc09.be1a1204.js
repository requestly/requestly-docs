"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(64894),i=r(69709);const s={sidebar_position:7,title:"Modify Query Params"},l=void 0,p={unversionedId:"http-modifications/query-params-rule",id:"http-modifications/query-params-rule",title:"Modify Query Params",description:"",source:"@site/docs/desktop-app/mac/http-modifications/query-params-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/query-params-rule",permalink:"/desktop-app/mac/http-modifications/query-params-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/query-params-rule.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Modify Query Params"},sidebar:"tutorialSidebar",previous:{title:"Modify Response Body",permalink:"/desktop-app/mac/http-modifications/response-rule"},next:{title:"Modify Cookies",permalink:"/desktop-app/mac/http-modifications/cookies-rule"}},u={},m=[],c={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{platform:o.iw.MAC,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>a});r(87462),r(67294),r(3905);const a={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},69709:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={toc:[{value:"Parts of Query params rule",id:"parts-of-query-params-rule",level:3},{value:"Popular cases",id:"popular-cases",level:3}]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Requestly is a browser extension that enables users to modify and manage\nrequest parameters for any website. It makes it easy to manage query\nparameters and headers for any website, allowing more control and flexibility\nin how requests are handled."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Add")," a new query param, ",(0,n.kt)("inlineCode",{parentName:"p"},"change")," the value of the existing param or ",(0,n.kt)("inlineCode",{parentName:"p"},"remove"),"\nall/specific query param from the URL."),(0,n.kt)("h3",{id:"parts-of-query-params-rule"},"Parts of Query params rule"),(0,n.kt)("img",{src:"/img/docs/modify-query-param-editor.png",alt:"Modify query param editor"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : If the request URL matches this ",(0,n.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Param Name")," : Name of param which you want to add, overrride or remove."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Param Value")," : Value of the respective param name."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Param Modification")," : This is the actual query param modification which needs to be performed. You can ",(0,n.kt)("inlineCode",{parentName:"li"},"Add"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Remove"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Override")," the query params of the matched URL.")),(0,n.kt)("h3",{id:"popular-cases"},"Popular cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using query params, you can burst cache for a request by assigning it a newer version."),(0,n.kt)("li",{parentName:"ul"},"Sending additional Information to some API calls to inform your backend & database that this is internal testing."),(0,n.kt)("li",{parentName:"ul"},"Remove UTM tracking parameters.")),(0,n.kt)("p",null,"Modifying query parameters with Requestly is a straightforward process that\ncan help you test how a website or application responds to different parameter\nvalues. By using Requestly's powerful rule system, you can quickly create and\napply rules to modify query parameters and observe the effects in real-time."))}i.isMDXComponent=!0}}]);