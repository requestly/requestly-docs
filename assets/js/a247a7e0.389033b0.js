"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(64894),a=r(5100);const l={sidebar_position:9,title:"Modify DOM / Inject Scripts"},c=void 0,p={unversionedId:"http-modifications/script-rule",id:"http-modifications/script-rule",title:"Modify DOM / Inject Scripts",description:"",source:"@site/docs/desktop-app/linux/http-modifications/script-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/script-rule",permalink:"/desktop-app/linux/http-modifications/script-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/http-modifications/script-rule.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Modify DOM / Inject Scripts"},sidebar:"tutorialSidebar",previous:{title:"Modify Cookies",permalink:"/desktop-app/linux/http-modifications/cookies-rule"},next:{title:"Modify User Agent",permalink:"/desktop-app/linux/http-modifications/user-agent-rule"}},s={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.LINUX,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},5100:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Common use cases",id:"common-use-cases",level:2},{value:"Demo:",id:"demo",level:2}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using \u201cInsert Scripts\u201d rule, you can make on-the-fly changes to a webpage content. It allows you to automate, scrape & change webpages behaviour without needed to access the page source code."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-script-rule.png",alt:"Insert Script Rule"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"Insert Script Rule"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition")," : If the request url matches this ",(0,o.kt)("em",{parentName:"li"},"source condition"),", then only the rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Script Language")," : Script language (JS/CSS) which needs to be inserted."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Script Source")," : Source (Code/URL) of the Script which needs to be inserted."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Script Load Time")," : When is the script loaded in the webpage. (Before Page Load/After Page Load)")),(0,o.kt)("h2",{id:"common-use-cases"},"Common use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inject popular libraries or hosted scripts or execute custom code-snippet before or after page load using simple rule builder."),(0,o.kt)("li",{parentName:"ul"},"Themify Twitter according to you. Remove/hide unwanted sections from page")),(0,o.kt)("h2",{id:"demo"},"Demo:"),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4dvucRjLwGY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);