"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),s=r(76883);const i={sidebar_position:13,title:"Modify GraphQL Response"},p=void 0,l={unversionedId:"features/mock-graphql-response",id:"features/mock-graphql-response",title:"Modify GraphQL Response",description:"",source:"@site/docs/desktop-app/linux/features/mock-graphql-response.mdx",sourceDirName:"features",slug:"/features/mock-graphql-response",permalink:"/desktop-app/linux/features/mock-graphql-response",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/mock-graphql-response.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Modify GraphQL Response"},sidebar:"tutorialSidebar",previous:{title:"Pinning Rules",permalink:"/desktop-app/linux/features/pinning-rules"},next:{title:"Troubleshooting",permalink:"/desktop-app/linux/troubleshooting"}},u={},c=[],d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.ZP,{platform:a.iw.LINUX,mdxType:"Component"}))}f.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},76883:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"How to use",id:"how-to-use",level:2}]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can modify the GraphQL API responses using the ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/advance-targetting"},"request payload")," filter in ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/response-rule"},"modify response rule"),".\nCurrently, it is a common practice to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"operationName")," for GraphQL queries to differentiate similar queries or for verbose logging on the backend."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"operationName")," is passed as the Request payload of the HTTP request that is meant to carry the GraphQL query, you can target these requests using the Request Payload filter and alter the data returned."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Source filter to modify GraphQL response",src:r(46496).Z,width:"1282",height:"426"}),"\n",(0,o.kt)("img",{alt:"Modify GraphQL response editor",src:r(915).Z,width:"1698",height:"976"})),(0,o.kt)("p",null,"You must make sure that the data that you return has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "data":{ ... },\n    "errors":[ ... ]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," contains the result to be returned for the given query. This is where you can read, alter and replace the response using the ",(0,o.kt)("a",{parentName:"li",href:"/browser-extension/chrome/http-modifications/response-rule"},"modify response rule"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errors")," contains any errors that occurred while fetching the query. This can be used to test the how your site handles errors.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can refer ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/blog/mocking-graphql-api-response/"},"this blog")," for detailed explanation.")))}s.isMDXComponent=!0},915:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graphql-editor-d952d9a69135a18bdd837aaf8703de41.png"},46496:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graphql-filter-5309d714cd6bd028ebfbf07527fd42bb.png"}}]);