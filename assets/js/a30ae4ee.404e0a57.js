"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?s.createElement(y,i(i({ref:t},u),{},{components:r})):s.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},15059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const o={sidebar_position:7,slug:"/architecture",sidebar_label:"Architecture",title:"Session Replay Architecture"},i=void 0,a={unversionedId:"architecture",id:"architecture",title:"Session Replay Architecture",description:"This document aims to provide an understanding of the architecture of session replay and its security aspects in the Requestly app.",source:"@site/docs/session-recording/architecture.mdx",sourceDirName:".",slug:"/architecture",permalink:"/session-recording/architecture",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/session-recording/architecture.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/architecture",sidebar_label:"Architecture",title:"Session Replay Architecture"},sidebar:"tutorialSidebar",previous:{title:"Replay Recording",permalink:"/session-recording/replay"}},l={},c=[{value:"Session replay on a Website",id:"session-replay-on-a-website",level:2},{value:"Reviewing a Session",id:"reviewing-a-session",level:2},{value:"Security Aspects",id:"security-aspects",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document aims to provide an understanding of the architecture of session replay and its security aspects in the Requestly app."),(0,n.kt)("h2",{id:"session-replay-on-a-website"},"Session replay on a Website"),(0,n.kt)("p",null,"When auto-recording a particular website, the extension adds a JavaScript library in the website - ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"request-web-sdk."),"js")," - which observes the mouse movement, console logs, and network logs. The recorded data is ",(0,n.kt)("strong",{parentName:"p"},"locally stored")," in the page\u2019s context (an in-memory JS variable)."),(0,n.kt)("p",null,"Please note, as soon as the page navigates or refreshes, the local context is cleared by the browser, and data recorded so far is lost. In Network logs, ",(0,n.kt)("strong",{parentName:"p"},"request headers are NOT captured")," as they are more likely to hold sensitive information like authorization tokens, auth id, session id, resource id, cookies, etc."),(0,n.kt)("h2",{id:"reviewing-a-session"},"Reviewing a Session"),(0,n.kt)("p",null,"Once the session is recorded on the website, you can review it, add details, save online or download the session file locally by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," . The Requestly UI retrieves the session data and renders the session player and other details."),(0,n.kt)("img",{src:"/img/docs/session-recording/architecture.png",alt:"Session Recording Architecture",width:"600"}),(0,n.kt)("p",null,"While saving the session, you can choose if Console logs and Network logs are to be included in the replay. If not included, they will not be saved on the Requestly server."),(0,n.kt)("h2",{id:"security-aspects"},"Security Aspects"),(0,n.kt)("p",null,"The security of session replay in Requestly is ensured by the following measures:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Local Storage of Data"),": All ",(0,n.kt)("strong",{parentName:"li"},"session data is stored locally")," in the page's context. No details of the session are stored on the Requestly server ",(0,n.kt)("strong",{parentName:"li"},"unless explicitly saved online"),'. This data is lost if you click the "Discard" button or close the Requestly UI and website, ensuring that no residual data is left on the server. You can also choose to ',(0,n.kt)("strong",{parentName:"li"},"save session locally")," using by clicking on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),"  >   ",(0,n.kt)("inlineCode",{parentName:"li"},"Download File.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"No Capture of Sensitive Information"),": The Requestly extension does not capture request headers in network logs, which are more likely to hold sensitive information like authorization tokens, auth id, session id, resource id, cookies, etc. This measure further enhances the security of session replay."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sync Storage and Firebase"),": The extension stores the configuration in the browser\u2019s local storage and also on the Requestly server (Firebase), ensuring it is available across all devices or browser instances logged in using the same account. This ensures that the data is securely stored and accessible only to the authorized user."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Requestly is OpenSource tool:"),"  Source code is freely available for inspection on GitHub. This transparency allows developers to verify the security measures implemented in the tool, providing an additional layer of trust and security. Please checkout Github for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/requestly/requestly"},"UI code")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/requestly/requestly-web-sdk"},"requestly-web-sdk"))),(0,n.kt)("p",null,"Requestly takes several measures to ensure the security of session replay, including local storage of data, not capturing sensitive information, and secure storage of configuration."))}d.isMDXComponent=!0}}]);