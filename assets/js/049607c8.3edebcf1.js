"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1833],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},78559:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=o(87462),n=(o(67294),o(3905)),i=o(26612),a=o(55969);const s={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/desktop-app/mac/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/desktop-app/mac/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/desktop-app/mac/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/desktop-app/mac/http-modifications/query-params-rule"}},d={},c=[],u={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.MAC,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,o)=>{o.d(t,{iw:()=>r});o(87462),o(67294),o(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},55969:(e,t,o)=>{o.d(t,{ZP:()=>a});var r=o(87462),n=(o(67294),o(3905));const i={toc:[{value:"Static Response Modification",id:"static-response-modification",level:2},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:2},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:3},{value:"<code>Return</code> type of <code>modifyResponseBody</code>",id:"return-type-of-modifyresponsebody",level:3},{value:"Popular use cases",id:"popular-use-cases",level:2}]};function a(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,n.kt)("h2",{id:"static-response-modification"},"Static Response Modification"),(0,n.kt)("p",null,"In this mode, you can enter the response body which you want as the response."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,n.kt)("center",null,(0,n.kt)("figcaption",null,"Response Rule - Static Body"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,n.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h2",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically.")),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-response-rule-programmatic.png",alt:"Response Rule - Programmatic"})),(0,n.kt)("h3",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,n.kt)("inlineCode",{parentName:"h3"},"modifyResponse")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,n.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE")," etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object stringified:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\'{"id":1,"app":"requestly","feature":"modify-request"}\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},"content-type")," of the HTTP response."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"request headers")," sent for the HTTP request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload in case of ",(0,n.kt)("inlineCode",{parentName:"li"},"POST | PUT | PATCH")," requests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON object)- The original response object in JSON format:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "id":1,\n  "app":"requestly",\n  "feature":"modify-request"\n}\n')),(0,n.kt)("h3",{id:"return-type-of-modifyresponsebody"},(0,n.kt)("inlineCode",{parentName:"h3"},"Return")," type of ",(0,n.kt)("inlineCode",{parentName:"h3"},"modifyResponseBody")),(0,n.kt)("p",null,"You can ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," modified response as ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," object."),(0,n.kt)("h2",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet."),(0,n.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data."),(0,n.kt)("li",{parentName:"ul"},"You want to simulate errors by returning different status codes."),(0,n.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end.")),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);