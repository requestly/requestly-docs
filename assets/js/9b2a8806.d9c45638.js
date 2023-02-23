"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[2516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(64894),a=r(44778);const l={sidebar_position:14,title:"Cancel Rule"},s=void 0,c={unversionedId:"http-modifications/cancel-rule",id:"http-modifications/cancel-rule",title:"Cancel Rule",description:"",source:"@site/docs/browser-extension/chrome/http-modifications/cancel-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/cancel-rule",permalink:"/browser-extension/chrome/http-modifications/cancel-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/chrome/http-modifications/cancel-rule.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Cancel Rule"},sidebar:"tutorialSidebar",previous:{title:"Delay Request",permalink:"/browser-extension/chrome/http-modifications/delay-rule"},next:{title:"Organizing Rules",permalink:"/browser-extension/chrome/features/organizing-rules"}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.CHROME,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},44778:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Common use cases",id:"common-use-cases",level:2}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cancel Rule is primarily used for Blocking Requests to avoid distraction."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-cancel-rule.png",alt:"Cancel Rule"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Cancel Rule"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,o.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("h2",{id:"common-use-cases"},"Common use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blocking Websites")," \u2014 You can use Cancel Rule to avoid distraction by blocking websites e.g. youtube, twitter, facebook. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testing error scenarios")," - Test your app when certain resource is not loaded. You can use Cancel rule to block a certain request which is not mandatory in your app and test how your app behaves without that resource.")))}a.isMDXComponent=!0}}]);