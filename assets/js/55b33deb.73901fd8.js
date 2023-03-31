"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7389],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return o?r.createElement(f,s(s({ref:t},u),{},{components:o})):r.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},26789:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=o(87462),n=(o(67294),o(3905)),i=o(26612),s=o(98457);const a={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/browser-extension/safari/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/browser-extension/safari/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/browser-extension/safari/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/browser-extension/safari/http-modifications/query-params-rule"}},u={},d=[],c={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{platform:i.iw.SAFARI,mdxType:"Component"}))}m.isMDXComponent=!0},98457:(e,t,o)=>{o.d(t,{ZP:()=>a});var r=o(87462),n=(o(67294),o(3905)),i=o(37617);const s={toc:[{value:"FAQ",id:"faq",level:2}]};function a(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Only requests triggered by XHR/fetch can be modified by the browser extension. For other type of requests, use ",(0,n.kt)("a",{parentName:"li",href:"https://requestly.io/desktop"},"Desktop App")),(0,n.kt)("li",{parentName:"ul"},"Response Modifications will not show up in the browser network devtools due to technical contraints. Try ",(0,n.kt)("a",{parentName:"li",href:"/guides/testing-response-rule"},"this")," to test whether Response Rule is working or not."))),(0,n.kt)(i.ZP,{mdxType:"Content"}),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Response Rule not working"),(0,n.kt)("div",null,(0,n.kt)("h4",null,"Rule might not be working for 2 reasons"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"Is not XHR/fetch request")," ",(0,n.kt)("br",null),"Only requests triggered by XHR/fetch can be modified by the browser extension due to technical constraints. For other type of requests, use ",(0,n.kt)("a",{href:"https://requestly.io/desktop"},"Desktop App")," instead."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Rule working but doesn't show updated response in devtools"),(0,n.kt)("br",null),"Response Modifications (body & status code) will not show up in the browser network devtools due to technical constraints. So your rule might actually be working but only doesn't show the updated response in the browser devtools. Try ",(0,n.kt)("a",{href:"/guides/testing-response-rule"},"this")," to verify whether your Response Rule is working or not.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What happens if i leave the status code field empty"),(0,n.kt)("div",null,"If you leave the status code empty, then the original status code of the request is returned.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where would `console.log` show up?"),(0,n.kt)("div",null,"Console logs will show up in the `console` of the website where you are testing rule on.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How to target `query` in graphQL requests"),(0,n.kt)("div",null,"Right now, only targetting using `operationName` is supported.")))}a.isMDXComponent=!0},26612:(e,t,o)=>{o.d(t,{iw:()=>r});o(87462),o(67294),o(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},37617:(e,t,o)=>{o.d(t,{ZP:()=>s});var r=o(87462),n=(o(67294),o(3905));const i={toc:[{value:"Popular use cases",id:"popular-use-cases",level:4},{value:"Supported resource types",id:"supported-resource-types",level:2},{value:"Types of Modifications",id:"types-of-modifications",level:2},{value:"Static Response Modification",id:"static-response-modification",level:3},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:3},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:4},{value:"Return type of modifyResponse (<code>string</code> or <code>JSON</code> object)",id:"return-type-of-modifyresponse-string-or-json-object",level:4},{value:"Targeting GraphQL requests",id:"targeting-graphql-requests",level:2},{value:"Guides",id:"guides",level:2}]};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,n.kt)("h4",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet."),(0,n.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data."),(0,n.kt)("li",{parentName:"ul"},"You want to simulate errors by returning different status codes."),(0,n.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end.")),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("h2",{id:"supported-resource-types"},"Supported resource types"),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule resource types",src:"/img/docs/resource-types.png"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule resource types"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rest API: Supports modifying XHR/fetch requests."),(0,n.kt)("li",{parentName:"ul"},"GraphQL API: Target & modify GraphQL api using operation."),(0,n.kt)("li",{parentName:"ul"},"HTML/JS/CSS: Only available in Desktop app")),(0,n.kt)("h2",{id:"types-of-modifications"},"Types of Modifications"),(0,n.kt)("h3",{id:"static-response-modification"},"Static Response Modification"),(0,n.kt)("p",null,"In this mode, you can enter the response body which you want as the response."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule - Static Body"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,n.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,n.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h3",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule - Programmatic",src:"/img/docs/annotated-response-rule-programmatic.png"})),(0,n.kt)("h4",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,n.kt)("inlineCode",{parentName:"h4"},"modifyResponse")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,n.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE")," etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object represented as string. Eg:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\'{"id":1,"app":"requestly","feature":"modify-request"}\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"content-type")," of the HTTP response."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"request headers")," sent to the server."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload in case of ",(0,n.kt)("inlineCode",{parentName:"li"},"POST | PUT | PATCH")," requests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON object)- The original response represented as JSON Object:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "id":1,\n  "app":"requestly",\n  "feature":"modify-request"\n}\n')),(0,n.kt)("h4",{id:"return-type-of-modifyresponse-string-or-json-object"},"Return type of modifyResponse (",(0,n.kt)("inlineCode",{parentName:"h4"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"h4"},"JSON")," object)"),(0,n.kt)("p",null,"You can modify both response or responseJSON and return any of them. Response Rule will automatically handle the response returned for the request."),(0,n.kt)("h2",{id:"targeting-graphql-requests"},"Targeting GraphQL requests"),(0,n.kt)("p",null,"You can target GraphQL requests using the operation name in request body. To do so add:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Payload JSON Key, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"operationName")),(0,n.kt)("li",{parentName:"ul"},"Value, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"getUsers"))),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{alt:"Response Rule - GraphQL resource type",src:"/img/docs/annotated-response-rule-graphql-resource-type.png"})),(0,n.kt)("p",null,"To learn more about this checkout ",(0,n.kt)("a",{parentName:"p",href:"../features/graphql-support"},"GraphQL Support"),"."),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/async-response-modification"},"Modifying Response asynchronously"),": Async modifications lets you perform some long running tasks before returning the response"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/guides/modifying-non-existent-domain-response"},"Modifying Non Existent Domain"),": Helpful for frontend developers when the backend isn't ready yet.")))}s.isMDXComponent=!0}}]);