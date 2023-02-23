"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[4646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return r?i.createElement(y,a(a({ref:t},u),{},{components:r})):i.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<n;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var i=r(87462),o=(r(67294),r(3905)),n=r(64894),a=r(1679);const s={sidebar_position:5,title:"Modify Request Payload"},l=void 0,d={unversionedId:"http-modifications/request-body-rule",id:"http-modifications/request-body-rule",title:"Modify Request Payload",description:"",source:"@site/docs/desktop-app/mac/http-modifications/request-body-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/request-body-rule",permalink:"/desktop-app/mac/http-modifications/request-body-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/request-body-rule.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Modify Request Payload"},sidebar:"tutorialSidebar",previous:{title:"Modify Headers",permalink:"/desktop-app/mac/http-modifications/headers-rule"},next:{title:"Modify Response Body",permalink:"/desktop-app/mac/http-modifications/response-rule"}},u={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:n.iw.MAC,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>i});r(87462),r(67294),r(3905);const i={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},1679:(e,t,r)=>{r.d(t,{ZP:()=>a});var i=r(87462),o=(r(67294),r(3905));const n={toc:[{value:"Static Request Body Modification",id:"static-request-body-modification",level:3},{value:"Programmatic Request Body Modification",id:"programmatic-request-body-modification",level:3},{value:"Arguments of <code>modifyRequestBody</code>",id:"arguments-of-modifyrequestbody",level:4},{value:"Demo:",id:"demo",level:2}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modifying the request payload is the process of changing the data that is sent to a server when making an HTTP request. You can use Modify Request Body rule to override the API request body with static data or programmatically modify the existing request payload."),(0,o.kt)("h3",{id:"static-request-body-modification"},"Static Request Body Modification"),(0,o.kt)("p",null,"In this mode you can enter static request body (JSON) which you want to forward to the server."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-request-rule-static.png",alt:"Response Rule Static"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Response Rule - Static Body"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,o.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Static Request Body")," : Define the static request body which needs to be passes to the server."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("h3",{id:"programmatic-request-body-modification"},"Programmatic Request Body Modification"),(0,o.kt)("p",null,"The existing request body can be modified programmatically using JavaScript. "),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-request-rule-programmatic.png",alt:"Response Rule - Programmatic"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Response Rule - Programmatic"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,o.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Status Code")," : Update the Response status code. (2XX, 3XX, 4XX, 5XX ...). If left empty, original status code is returned."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Programmatic Modification Script (JS)")," : Write a JavaScript script which can modify the existing request body programmatically."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("h4",{id:"arguments-of-modifyrequestbody"},"Arguments of ",(0,o.kt)("inlineCode",{parentName:"h4"},"modifyRequestBody")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," (string)- The HTTP method of the request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"body")," (string)- The original request body stringified."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"responseAsJson")," (JSON obj)- The original request body parsed into json using JSON.parse(body).")),(0,o.kt)("h1",{id:"popular-use-cases"},"Popular Use Cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Primarily used in Sending additional data in request payload to the API server:")," There might be situations where additional data needs to be sent in request payloads to the API server when making a POST or PUT request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modifying GraphQL Queries:")," GraphQL queries can be modified by modifying the request body of the request. This can be done by changing the query string or variables in the request body."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testing different edge cases:")," You may modify an API request payload to include an invalid or unsupported field. The API request will likely be rejected by the server, and an error message will be returned.")),(0,o.kt)("h2",{id:"demo"},"Demo:"),(0,o.kt)("p",null,"TODO: add demo video here"))}a.isMDXComponent=!0}}]);