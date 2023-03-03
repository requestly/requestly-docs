"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),i=r(26612),a=r(37617);const s={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/browser-extension/firefox/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/browser-extension/firefox/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/browser-extension/firefox/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/browser-extension/firefox/http-modifications/query-params-rule"}},d={},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.FIREFOX,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},37617:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={toc:[{value:"Static Response Modification",id:"static-response-modification",level:2},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:2},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:3},{value:"<code>Return</code> type of <code>modifyResponseBody</code>",id:"return-type-of-modifyresponsebody",level:3},{value:"Popular use cases",id:"popular-use-cases",level:2}]};function a(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Only API Responses triggered by XHR/fetch can be modified by the browser extension. For other type of requests, use ",(0,n.kt)("a",{parentName:"li",href:"https://requestly.io/desktop"},"Desktop App")),(0,n.kt)("li",{parentName:"ul"},"When you edit the rule, please refresh the page on which you are modifying the HTTP response after saving the changes."))),(0,n.kt)("h2",{id:"static-response-modification"},"Static Response Modification"),(0,n.kt)("p",null,"In this mode, you can enter the response body which you want as the response."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule - Static Body"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,n.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h2",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically.")),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-programmatic.png",alt:"Response Rule - Programmatic"})),(0,n.kt)("h3",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,n.kt)("inlineCode",{parentName:"h3"},"modifyResponse")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,n.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE")," etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object stringified:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\'{"id":1,"app":"requestly","feature":"modify-request"}\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"content-type")," of the HTTP response."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"request headers")," sent for the HTTP request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload in case of ",(0,n.kt)("inlineCode",{parentName:"li"},"POST | PUT | PATCH")," requests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON object)- The original response object in JSON format:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "id":1,\n  "app":"requestly",\n  "feature":"modify-request"\n}\n')),(0,n.kt)("h3",{id:"return-type-of-modifyresponsebody"},(0,n.kt)("inlineCode",{parentName:"h3"},"Return")," type of ",(0,n.kt)("inlineCode",{parentName:"h3"},"modifyResponseBody")),(0,n.kt)("p",null,"You can ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," modified response as ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," object."),(0,n.kt)("h2",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet."),(0,n.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data."),(0,n.kt)("li",{parentName:"ul"},"You want to simulate errors by returning different status codes."),(0,n.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end.")),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);