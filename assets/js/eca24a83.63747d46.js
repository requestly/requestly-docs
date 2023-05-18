"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[9673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},42038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905)),a=r(26612),o=r(34183);const l={title:"Getting Started With Requestly Desktop App",slug:"/"},s=void 0,p={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting Started With Requestly Desktop App",description:"",source:"@site/docs/desktop-app/mac/getting-started/index.mdx",sourceDirName:"getting-started",slug:"/",permalink:"/desktop-app/mac/",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/getting-started/index.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Requestly Desktop App",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/desktop-app/mac/getting-started/installation"}},u={},c=[],d={toc:c};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{platform:a.iw.MAC,mdxType:"Component"}))}g.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},77230:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(87462),i=(r(67294),r(3905));const a={toc:[]};function o(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch environment for JS Code & APIs ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. Loading JS/APIs from dev environment on production sites"))),(0,i.kt)("li",{parentName:"ul"},"Swapping scripts on live client sites",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. Swap Tag Manager or other SaaS solution scripts from prod version to staging version"))),(0,i.kt)("li",{parentName:"ul"},"Testing & Debugging Content-Security-Policy Header"),(0,i.kt)("li",{parentName:"ul"},"Debugging CORS Issues (Using Modify Headers and modifying Access-Control-* headers)"),(0,i.kt)("li",{parentName:"ul"},"Debugging (or Modifying) API responses in production sites"),(0,i.kt)("li",{parentName:"ul"},"Manipulating Query Parameters for testing purposes ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Highly used in Ad Pixels & Analytics testing"))),(0,i.kt)("li",{parentName:"ul"},"Modifying GraphQL Queries sent to the server programatically and test handling in app"),(0,i.kt)("li",{parentName:"ul"},"Testing different failover and edge cases in app by serving different API responses"),(0,i.kt)("li",{parentName:"ul"},"Simulating latency on APIs and other resources like scripts & Images"),(0,i.kt)("li",{parentName:"ul"},"Testing your app with 4xx or 5xx HTTP response status codes")))}o.isMDXComponent=!0},34183:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),i=(r(67294),r(3905)),a=r(77230);const o={toc:[{value:"Intro Video",id:"intro-video",level:2},{value:"Popular Use Cases",id:"popular-use-cases",level:2},{value:"Traffic Table and filtering",id:"traffic-table-and-filtering",level:2},{value:"Right-click on a network request for more options",id:"right-click-on-a-network-request-for-more-options",level:2},{value:"Edit and replay a request",id:"edit-and-replay-a-request",level:3},{value:"Github",id:"github",level:2}]};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Requestly desktop app helps you ",(0,i.kt)("strong",{parentName:"p"},"Intercept, Record & Modify HTTP(s) requests for all browsers, Android and iOS apps"),". Available on all platforms, You can install the desktop app from ",(0,i.kt)("a",{parentName:"p",href:"https://requestly.io/downloads"},"the downloads page"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Go to Connected Apps section to launch a browser or Connect to external devices like Android & iOS apps.")),(0,i.kt)("h2",{id:"intro-video"},"Intro Video"),(0,i.kt)("center",null,(0,i.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/xUdwViRtiY0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,i.kt)("h2",{id:"popular-use-cases"},"Popular Use Cases"),(0,i.kt)(a.ZP,{mdxType:"PopularUseCases"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save and share network session with teammates for collaborative debugging."),(0,i.kt)("li",{parentName:"ul"},"You can review network requests, inspect response payloads, and analyze the sequence of events during the debugging session.")),(0,i.kt)("h2",{id:"traffic-table-and-filtering"},"Traffic Table and filtering"),(0,i.kt)("p",null,"After connecting apps, all the network traffic is logged in the traffic table. The traffic table supports filtering based on-"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method, status code, content type."),(0,i.kt)("li",{parentName:"ul"},"apps or domains")),(0,i.kt)("p",null,"Traffic table can be searched using keyword as well as using regex."),(0,i.kt)("figure",{style:{width:"75%"}},(0,i.kt)("img",{width:600,height:350,alt:"request right-click",src:"/img/docs/traffic-table-filtering.png"}),(0,i.kt)("center",null,(0,i.kt)("figcaption",null,"Filtering on network traffic table"))),(0,i.kt)("h2",{id:"right-click-on-a-network-request-for-more-options"},"Right-click on a network request for more options"),(0,i.kt)("p",null,"When right-clicking any request, a context menu is opened which shows options to copy URL, copy cURL, edit and replay the request, create rules etc."),(0,i.kt)("figure",{style:{width:"75%"}},(0,i.kt)("img",{width:600,height:350,alt:"request right-click",src:"/img/docs/desktop/create-first-rule/request-right-click.gif"}),(0,i.kt)("center",null,(0,i.kt)("figcaption",null,"Right-click on request"))),(0,i.kt)("h3",{id:"edit-and-replay-a-request"},"Edit and replay a request"),(0,i.kt)("p",null,"Any of the network request edited and replayed by right-clicking on it and selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"edit and replay"),"."),(0,i.kt)("figure",{style:{width:"75%"}},(0,i.kt)("img",{width:600,height:350,alt:"request right-click",src:"/img/docs/edit-replay-request.png"}),(0,i.kt)("center",null,(0,i.kt)("figcaption",null,"Edit and replay the request"))),(0,i.kt)("h2",{id:"github"},"Github"),(0,i.kt)("p",null,"You can visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/requestly"},"Requestly's Github repository")," to stay updated with our progress, report bugs, and submit requests to our team."))}l.isMDXComponent=!0}}]);