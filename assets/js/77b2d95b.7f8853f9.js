"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3383],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},45875:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:3,slug:"/record"},a="Record a Session",s={unversionedId:"record",id:"record",title:"Record a Session",description:"Requestly automatically records the video of your browsing session along with debugging details on the configured domains.",source:"@site/docs/session-recording/record.mdx",sourceDirName:".",slug:"/record",permalink:"/session-recording/record",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/session-recording/record.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/record"},sidebar:"tutorialSidebar",previous:{title:"Configure pages",permalink:"/session-recording/configure"},next:{title:"Save Session",permalink:"/session-recording/save"}},c={},l=[{value:"Steps for auto recording mode",id:"steps-for-auto-recording-mode",level:2},{value:"Start/Stop recording manually",id:"startstop-recording-manually",level:2}],d={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"record-a-session"},"Record a Session"),(0,o.kt)("p",null,"Requestly automatically records the video of your browsing session along with debugging details on the configured domains."),(0,o.kt)("h2",{id:"steps-for-auto-recording-mode"},"Steps for auto recording mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you browse a configured webpage and notice a bug, click ",(0,o.kt)("em",{parentName:"p"},"Requestly")," icon in the browser extension toolbar (next to the address bar). If you haven't pinned the extension to the toolbar yet, you may do it by clicking below icon."),(0,o.kt)("img",{src:"/img/icons/browser-extension.svg",alt:"extension icon",width:"20",style:{margin:"0 5px",verticalAlign:"middle"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Watch Replay")," link in the popup."),(0,o.kt)("img",{src:"/img/docs/session-recording/view-recording.png",alt:"View Session Recording",width:"600"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The details of the recorded session will open in a new browser tab."))),(0,o.kt)("h2",{id:"startstop-recording-manually"},"Start/Stop recording manually"),(0,o.kt)("p",null,"If you haven't configured the Session Recording on a webpage, you may still start and stop the recording manually by clicking ",(0,o.kt)("strong",{parentName:"p"},"Start recording")," and ",(0,o.kt)("strong",{parentName:"p"},"Stop recording")," in the extension popup."))}p.isMDXComponent=!0}}]);