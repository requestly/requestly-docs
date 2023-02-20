"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(64894),i=r(11433);const s={sidebar_position:1,title:"Understanding different Rule Types"},l=void 0,p={unversionedId:"http-modifications/overview",id:"http-modifications/overview",title:"Understanding different Rule Types",description:"",source:"@site/docs/browser-extension/safari/http-modifications/overview.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/overview",permalink:"/browser-extension/safari/http-modifications/overview",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/http-modifications/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Understanding different Rule Types"},sidebar:"tutorialSidebar",previous:{title:"Create First Rule",permalink:"/browser-extension/safari/getting-started/create-first-rule"},next:{title:"Url Redirect",permalink:"/browser-extension/safari/http-modifications/redirect-rule"}},u={},c=[],m={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{platform:o.iw.SAFARI,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},11433:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rules are a powerful feature that allows you to customize your web browsing experience. They allow you to define conditions that, when met, trigger a certain action.\nWith Requestly, you have the power to take ",(0,a.kt)("strong",{parentName:"p"},"complete control over the HTTP requests")," that flow through your browser."),(0,a.kt)("h1",{id:"different-rule-types"},"Different Rule Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"redirect-rule"},(0,a.kt)("strong",{parentName:"a"},"Redirect Rule"))," - Redirect scripts, APIs, Stylesheets, or any other resource from one environment to another."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"replace-rule"},(0,a.kt)("strong",{parentName:"a"},"Replace Rule"))," - Replace parts of URL like hostname, query value "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"response-rule"},(0,a.kt)("strong",{parentName:"a"},"Modify Response Rule"))," - Override API responses with static data or programmatically. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"headers-rule"},(0,a.kt)("strong",{parentName:"a"},"Modify Headers Rule"))," - Modify HTTP request & response headers. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"request-body-rule"},(0,a.kt)("strong",{parentName:"a"},"Modify Request Rule"))," - Override API request body with static data or programmatically modify existing request payload."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"script-rule"},(0,a.kt)("strong",{parentName:"a"},"Insert Scripts Rule"))," - Inject Custom JavaScript (JS) or Styles (CSS) to any website"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"query-params-rule"},(0,a.kt)("strong",{parentName:"a"},"Query Param Rule"))," - Add or Remove Query Parameters "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cancel Rule")," - Block Individual network requests or entire websites by specifying keywords in the URL or the URL pattern. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"delay-rule"},(0,a.kt)("strong",{parentName:"a"},"Delay Rule"))," - Introduce a lag or delay to the response from specific URLs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"user-agent-rule"},(0,a.kt)("strong",{parentName:"a"},"User-Agent Rule"))," - Emulate for different devices by varying user-agent")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can learn about the different rule types in detail in their individual docs.")))}i.isMDXComponent=!0}}]);