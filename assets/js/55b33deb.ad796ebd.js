"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(64894),a=n(45877);const s={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/browser-extension/safari/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/browser-extension/safari/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/browser-extension/safari/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/browser-extension/safari/http-modifications/query-params-rule"}},c={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{platform:i.iw.SAFARI,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>o});n(87462),n(67294),n(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},45877:(e,t,n)=>{n.d(t,{ZP:()=>a});var o=n(87462),r=(n(67294),n(3905));const i={toc:[{value:"Static Response Modification",id:"static-response-modification",level:3},{value:"Programmatic Response Modification",id:"programmatic-response-modification",level:3},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:4},{value:"Common use cases",id:"common-use-cases",level:2},{value:"Demo:",id:"demo",level:2}]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only API Responses triggered by XHR/fetch can be modified by the browser extension. For other type of requests, use ",(0,r.kt)("a",{parentName:"p",href:"https://requestly.io/desktop"},"Desktop App"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you edit the rule, please refresh the page on which you are modifying the HTTP response after saving the changes.")),(0,r.kt)("h3",{id:"static-response-modification"},"Static Response Modification"),(0,r.kt)("p",null,"In this mode you can enter the response body which you want as the response."),(0,r.kt)("figure",{style:{width:"75%"}},(0,r.kt)("img",{src:"/img/docs/annotated-response-rule-static.png",alt:"Response Rule Static"}),(0,r.kt)("center",null,(0,r.kt)("figcaption",null,"Response Rule - Static Body"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,r.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Static Response Body")," : Define the updated response body which needs to be returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,r.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,r.kt)("h3",{id:"programmatic-response-modification"},"Programmatic Response Modification"),(0,r.kt)("p",null,"The existing response can be modified programmatically using JavaScript. "),(0,r.kt)("figure",{style:{width:"75%"}},(0,r.kt)("img",{src:"/img/docs/annotated-response-rule-programmatic.png",alt:"Response Rule - Programmatic"}),(0,r.kt)("center",null,(0,r.kt)("figcaption",null,"Response Rule - Programmatic"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,r.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing response programmatically."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,r.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,r.kt)("h4",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,r.kt)("inlineCode",{parentName:"h4"},"modifyResponse")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," (string)- The HTTP method of the request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"response")," (string)- The original response object stringified."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"responseType")," (string)- The content-type of the HTTP response."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (Object<string, string>)- The request headers sent for the HTTP request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestData")," (string)- The HTTP request payload."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"responseJSON")," (JSON obj)- The original response object.")),(0,r.kt)("h2",{id:"common-use-cases"},"Common use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to work on front-end while back-end is not available or ready yet"),(0,r.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end."),(0,r.kt)("li",{parentName:"ul"},"You want to mock fluctuating API responses"),(0,r.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data source")),(0,r.kt)("h2",{id:"demo"},"Demo:"),(0,r.kt)("center",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);