"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),i=r(90109);const l={sidebar_position:3,title:"Replace String (Switch Hosts, API Endpoints)"},s=void 0,p={unversionedId:"http-modifications/replace-rule",id:"http-modifications/replace-rule",title:"Replace String (Switch Hosts, API Endpoints)",description:"",source:"@site/docs/browser-extension/chrome/http-modifications/replace-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/replace-rule",permalink:"/browser-extension/chrome/http-modifications/replace-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/chrome/http-modifications/replace-rule.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Replace String (Switch Hosts, API Endpoints)"},sidebar:"tutorialSidebar",previous:{title:"Url Redirect",permalink:"/browser-extension/chrome/http-modifications/redirect-rule"},next:{title:"Modify Headers",permalink:"/browser-extension/chrome/http-modifications/headers-rule"}},c={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.CHROME,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},90109:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Parts of Replace Rule",id:"parts-of-replace-rule",level:3},{value:"Popular use cases",id:"popular-use-cases",level:3},{value:"Demo",id:"demo",level:3}]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Replace Rule allows users to replace a string (or matching pattern) with another string in the URL. "),(0,o.kt)("h3",{id:"parts-of-replace-rule"},"Parts of Replace Rule"),(0,o.kt)("img",{src:"/img/docs/annotated-replace-rule.png",alt:"Replace Rule"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Replace From")," : This is the text the request which is replaced."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Replace With")," : This is what ",(0,o.kt)("inlineCode",{parentName:"li"},"Replace from")," text is replaced with."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Url")," : This is the ",(0,o.kt)("em",{parentName:"li"},"source condition")," when rule is applied. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request.")),(0,o.kt)("h3",{id:"popular-use-cases"},"Popular use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Switch Domains:")," To test your app with the new changes done on the local server, you can use Replace Rule to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"my-app-server.com")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:4000")," in all URLs, thus allowing you to test your app without having to change any of your code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Change Query Parameter Values:")," You can change the values of query parameters present in a URL. For example: Changing ",(0,o.kt)("inlineCode",{parentName:"li"},"?dl-0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"?dl=1")," in a dropbox URL downloads the file directly without going to the usual preview page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fix broken/updated URLs:")," There might be situations where links to some documentation or blog posts have been changed/updated, but you have developed a typing habit of old URLs. Well, you can use replace rule to achieve that use case.")),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/3esnRDWUBdU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}i.isMDXComponent=!0}}]);