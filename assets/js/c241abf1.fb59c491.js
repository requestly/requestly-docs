"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(64894),i=r(69709);const s={sidebar_position:7,title:"Modify Query Params"},l=void 0,p={unversionedId:"http-modifications/query-params-rule",id:"http-modifications/query-params-rule",title:"Modify Query Params",description:"",source:"@site/docs/browser-extension/opera/http-modifications/query-params-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/query-params-rule",permalink:"/browser-extension/opera/http-modifications/query-params-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/opera/http-modifications/query-params-rule.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Modify Query Params"},sidebar:"tutorialSidebar",previous:{title:"Modify Response Body",permalink:"/browser-extension/opera/http-modifications/response-rule"},next:{title:"Modify Cookies",permalink:"/browser-extension/opera/http-modifications/cookies-rule"}},u={},c=[],m={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{platform:o.iw.OPERA,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},69709:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={toc:[{value:"Popular cases",id:"popular-cases",level:3}]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using Requestly, you can modify the query params that are send to the server.\nYou ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," a new query param, ",(0,a.kt)("inlineCode",{parentName:"p"},"change")," the value of the existing param or ",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),"\nall/specific query param from the URL."),(0,a.kt)("figure",{style:{width:"75%"}},(0,a.kt)("img",{src:"/img/docs/annotated-query-param-rule.png",alt:"Query Param Rule"}),(0,a.kt)("center",null,(0,a.kt)("figcaption",null,"Query Param Rule"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Source Condition")," : If the request URL matches this ",(0,a.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,a.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Param Modification")," : This is the actual query param modification which needs to be performed. You can ",(0,a.kt)("inlineCode",{parentName:"li"},"Add"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Remove"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Override")," the query params of the matched URL."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,a.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,a.kt)("h3",{id:"popular-cases"},"Popular cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove UTM tracking parameters."),(0,a.kt)("li",{parentName:"ul"},"Using query params, you can burst cache for a request by assigning it a newer version."),(0,a.kt)("li",{parentName:"ul"},"Sending additional Information to some API calls to inform your backend & database that this is internal testing.")))}i.isMDXComponent=!0}}]);