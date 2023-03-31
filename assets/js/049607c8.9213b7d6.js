"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=r(87462),n=(r(67294),r(3905)),a=r(26612),i=r(55969);const s={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/desktop-app/mac/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/desktop-app/mac/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/desktop-app/mac/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/desktop-app/mac/http-modifications/query-params-rule"}},u={},d=[],c={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{platform:a.iw.MAC,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},37617:(e,t,r)=>{r.d(t,{ZP:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={toc:[{value:"Popular use cases",id:"popular-use-cases",level:4},{value:"Supported resource types",id:"supported-resource-types",level:2},{value:"Types of Modifications",id:"types-of-modifications",level:2},{value:"Static Response Modification",id:"static-response-modification",level:3},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:3},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:4},{value:"Return type of modifyResponse (<code>string</code> or <code>JSON</code> object)",id:"return-type-of-modifyresponse-string-or-json-object",level:4},{value:"Targeting GraphQL requests",id:"targeting-graphql-requests",level:2},{value:"Guides",id:"guides",level:2}]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,n.kt)("h4",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet."),(0,n.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data."),(0,n.kt)("li",{parentName:"ul"},"You want to simulate errors by returning different status codes."),(0,n.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end.")),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("h2",{id:"supported-resource-types"},"Supported resource types"),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule resource types",src:"/img/docs/resource-types.png"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule resource types"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rest API: Supports modifying XHR/fetch requests."),(0,n.kt)("li",{parentName:"ul"},"GraphQL API: Target & modify GraphQL api using operation."),(0,n.kt)("li",{parentName:"ul"},"HTML/JS/CSS: Only available in Desktop app")),(0,n.kt)("h2",{id:"types-of-modifications"},"Types of Modifications"),(0,n.kt)("h3",{id:"static-response-modification"},"Static Response Modification"),(0,n.kt)("p",null,"In this mode, you can enter the response body which you want as the response."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule - Static Body"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,n.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,n.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h3",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule - Programmatic",src:"/img/docs/annotated-response-rule-programmatic.png"})),(0,n.kt)("h4",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,n.kt)("inlineCode",{parentName:"h4"},"modifyResponse")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,n.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE")," etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object represented as string. Eg:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\'{"id":1,"app":"requestly","feature":"modify-request"}\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"content-type")," of the HTTP response."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"request headers")," sent to the server."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload in case of ",(0,n.kt)("inlineCode",{parentName:"li"},"POST | PUT | PATCH")," requests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON object)- The original response represented as JSON Object:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "id":1,\n  "app":"requestly",\n  "feature":"modify-request"\n}\n')),(0,n.kt)("h4",{id:"return-type-of-modifyresponse-string-or-json-object"},"Return type of modifyResponse (",(0,n.kt)("inlineCode",{parentName:"h4"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"h4"},"JSON")," object)"),(0,n.kt)("p",null,"You can modify both response or responseJSON and return any of them. Response Rule will automatically handle the response returned for the request."),(0,n.kt)("h2",{id:"targeting-graphql-requests"},"Targeting GraphQL requests"),(0,n.kt)("p",null,"You can target GraphQL requests using the operation name in request body. To do so add:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Payload JSON Key, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"operationName")),(0,n.kt)("li",{parentName:"ul"},"Value, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"getUsers"))),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule - GraphQL resource type",src:"/img/docs/annotated-response-rule-graphql-resource-type.png"})),(0,n.kt)("p",null,"To learn more about this checkout ",(0,n.kt)("a",{parentName:"p",href:"../features/graphql-support"},"GraphQL Support"),"."),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/async-response-modification"},"Modifying Response asynchronously"),": Async modifications lets you perform some long running tasks before returning the response"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/modifying-non-existent-domain-response"},"Modifying Non Existent Domain"),": Helpful for frontend developers when the backend isn't ready yet.")))}i.isMDXComponent=!0},55969:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(87462),n=(r(67294),r(3905)),a=r(37617);const i={toc:[{value:"FAQ",id:"faq",level:2}]};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{mdxType:"Content"}),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What happens if i leave the status code field empty"),(0,n.kt)("div",null,"If you leave the status code empty, then the original status code of the request is returned.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where would `console.log` show up?"),(0,n.kt)("div",null,"TODO")))}s.isMDXComponent=!0}}]);