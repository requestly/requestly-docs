"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),i=r(26612),a=r(37617);const s={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/browser-extension/edge/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/browser-extension/edge/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/browser-extension/edge/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/browser-extension/edge/http-modifications/query-params-rule"}},d={},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.EDGE,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},37617:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Static Response Modification",id:"static-response-modification",level:2},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:2},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:3},{value:"<code>Return</code> type of <code>modifyResponseBody</code>",id:"return-type-of-modifyresponsebody",level:3},{value:"Popular use cases",id:"popular-use-cases",level:2}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Only API Responses triggered by XHR/fetch can be modified by the browser extension. For other type of requests, use ",(0,o.kt)("a",{parentName:"li",href:"https://requestly.io/desktop"},"Desktop App")),(0,o.kt)("li",{parentName:"ul"},"When you edit the rule, please refresh the page on which you are modifying the HTTP response after saving the changes."))),(0,o.kt)("h2",{id:"static-response-modification"},"Static Response Modification"),(0,o.kt)("p",null,"In this mode, you can enter the response body which you want as the response."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Response Rule - Static Body"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,o.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("h2",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically.")),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-response-rule-programmatic.png",alt:"Response Rule - Programmatic"})),(0,o.kt)("h3",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,o.kt)("inlineCode",{parentName:"h3"},"modifyResponse")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,o.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE")," etc."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object stringified:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\'{"id":1,"app":"requestly","feature":"modify-request"}\'\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"content-type")," of the HTTP response."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"request headers")," sent for the HTTP request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload in case of ",(0,o.kt)("inlineCode",{parentName:"li"},"POST | PUT | PATCH")," requests."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON object)- The original response object in JSON format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id":1,\n  "app":"requestly",\n  "feature":"modify-request"\n}\n')),(0,o.kt)("h3",{id:"return-type-of-modifyresponsebody"},(0,o.kt)("inlineCode",{parentName:"h3"},"Return")," type of ",(0,o.kt)("inlineCode",{parentName:"h3"},"modifyResponseBody")),(0,o.kt)("p",null,"You can ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," modified response as ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," object."),(0,o.kt)("h2",{id:"popular-use-cases"},"Popular use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet."),(0,o.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data."),(0,o.kt)("li",{parentName:"ul"},"You want to simulate errors by returning different status codes."),(0,o.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end.")),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);