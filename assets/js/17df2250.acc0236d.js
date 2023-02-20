"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905)),i=r(64894),a=r(20842);const l={sidebar_position:2,title:"Url Redirect"},s=void 0,c={unversionedId:"http-modifications/redirect-rule",id:"http-modifications/redirect-rule",title:"Url Redirect",description:"",source:"@site/docs/browser-extension/edge/http-modifications/redirect-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/redirect-rule",permalink:"/browser-extension/edge/http-modifications/redirect-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/http-modifications/redirect-rule.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Url Redirect"},sidebar:"tutorialSidebar",previous:{title:"Understanding different Rule Types",permalink:"/browser-extension/edge/http-modifications/overview"},next:{title:"Replace String (Switch Hosts, API Endpoints)",permalink:"/browser-extension/edge/http-modifications/replace-rule"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.EDGE,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},20842:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={toc:[{value:"Parts of Redirect Rule",id:"parts-of-redirect-rule",level:3},{value:"Popular use cases",id:"popular-use-cases",level:3},{value:"Demo",id:"demo",level:3}]};function a(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The redirect rule allows you to redirect a request URL (or matching pattern) to another URL. "),(0,n.kt)("h3",{id:"parts-of-redirect-rule"},"Parts of Redirect Rule"),(0,n.kt)("img",{src:"/img/docs/annotated-redirect-rule.png",alt:"Redirect Rule"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source Condition")," : This is the ",(0,n.kt)("em",{parentName:"li"},"source condition")," when rule is applied. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Destination Url")," : This is the destination url for the redirect when request Source Condition Matches.")),(0,n.kt)("h3",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Redirect Production to Local Environment:")," Map your production scripts or APIs to your local running code and test your local code directly on production sites without deployment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Redirect to local System files (Map Local):")," With Requestly, you get our very own Mock Server Integration out of the box with the Redirect Request Rule. No need for a separate localhost server when the work can be easier! You can find more details ",(0,n.kt)("a",{parentName:"li",href:"https://docs.requestly.tech/browser-extension/chrome/features/map-local"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Test API version changes:")," Suppose there is a new version of some API which you are using. To test the backward compatibility of the API, you can just set up a redirect rule to redirect all URLs from the older version to the newer version and check if your application behaves as expected. This way, you don\u2019t need to change a single line of your code and test the API upgrades."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Fix Broken Urls, Redirect dead bookmarks, and Create URL shortcuts:")," You can setup a redirect rule to fix some broken URLs, redirect the dead bookmarks to new working bookmarks and create URL shortcuts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Swap Tag Manager scripts from production to staging/dev environment:")," Test your dev implementation in tag manager scripts like Adobe DTM, Tealium Tag, Google Tag Manager Containers before pushing them live on client websites. Learn more ",(0,n.kt)("a",{parentName:"li",href:"https://requestly.io/blog/replace-adobe-launch-production-script-with-development-script"},"here"),".")),(0,n.kt)("h3",{id:"demo"},"Demo"),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/lOt1kGKTq-w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);