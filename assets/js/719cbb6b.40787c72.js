"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(26612),p=r(72071);const i={sidebar_position:13,title:"GraphQL Support"},s=void 0,l={unversionedId:"features/graphql-support",id:"features/graphql-support",title:"GraphQL Support",description:"",source:"@site/docs/desktop-app/linux/features/graphql-support.mdx",sourceDirName:"features",slug:"/features/graphql-support",permalink:"/desktop-app/linux/features/graphql-support",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/graphql-support.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"GraphQL Support"},sidebar:"tutorialSidebar",previous:{title:"Pinning Rules",permalink:"/desktop-app/linux/features/pinning-rules"},next:{title:"Import settings from Charles Proxy",permalink:"/desktop-app/linux/features/import-settings-from-charles"}},u={},c=[],d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p.ZP,{platform:a.iw.LINUX,mdxType:"Component"}))}f.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},72071:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Modifying graphQL responses",id:"modifying-graphql-responses",level:2},{value:"Modifying graphQL queries",id:"modifying-graphql-queries",level:2}]};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With Requestly, you can alter GraphQL API requests and responses through the use of the ",(0,o.kt)("a",{parentName:"p",href:"./advance-targeting"},"request payload")," filter\nin the ",(0,o.kt)("a",{parentName:"p",href:"../http-modifications/request-body-rule"},"modify request")," and ",(0,o.kt)("a",{parentName:"p",href:"../http-modifications/response-rule"},"modify response")," rules."),(0,o.kt)("h2",{id:"modifying-graphql-responses"},"Modifying graphQL responses"),(0,o.kt)("p",null,"GraphQL requests are directed at a single endpoint. So for quering, it is a common practice to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"operationName"),"\nto differentiate similar queries or for verbose logging on the backend. To modify the responses, you can target ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"operationName")," using ",(0,o.kt)("a",{parentName:"p",href:"../http-modifications/response-rule"},"Modify Response rule")," and then modify the responses."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{alt:"Response Rule - GraphQL payload",src:"/img/docs/graphql-payload.png"})),(0,o.kt)("p",null,"You can target GraphQL requests using the operation name in request body. To do so add:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Payload JSON Key, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"operationName")),(0,o.kt)("li",{parentName:"ul"},"Value, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"getUsers"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payload also supports nested path.")),(0,o.kt)("h2",{id:"modifying-graphql-queries"},"Modifying graphQL queries"),(0,o.kt)("p",null,"The graphQL queries can be modified by using the ",(0,o.kt)("a",{parentName:"p",href:"../http-modifications/request-body-rule"},"modify request body")," rule where the request body can be altered."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can refer ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/blog/mocking-graphql-api-response/"},"this blog")," for detailed explanation.")))}p.isMDXComponent=!0}}]);