"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),i=n(64894),s=n(1677);const l={sidebar_position:5,title:"Troubleshooting"},a=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"",source:"@site/docs/browser-extension/edge/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/browser-extension/edge/troubleshooting",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/troubleshooting.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Support",permalink:"/browser-extension/edge/features/graphql-support"},next:{title:"FAQ",permalink:"/browser-extension/edge/faq"}},c={},p=[],b={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.ZP,{platform:i.iw.EDGE,mdxType:"Troubleshooting"}))}d.isMDXComponent=!0},1677:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This explains how to troubleshoot if the rules are not working even if the Requestly extension is installed in the browser."),(0,o.kt)("h4",null,"Check if permissions are given to the extension "),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Visit"," ",(0,o.kt)("span",{style:{textTransform:"lowercase"}},'"',n.platform,"://extensions\u201d")," ","URL"),(0,o.kt)("li",null,"Click on the Details button of the Requestly extension "),(0,o.kt)("li",null,"Under \u201cSite access\u201d, choose \u201cOn all sites\u201d",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/docs/troubleshooting/chrome/site-access.png",width:"50%"}))),(0,o.kt)("h4",null,"Check if extension is enabled in ",n.platform," Settings"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Visit"," ",(0,o.kt)("span",{style:{textTransform:"lowercase"}},'"',n.platform,"://extensions\u201d")," "),(0,o.kt)("li",null,"Check if the extension is enabled or not."),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/docs/troubleshooting/chrome/extension-enable.png",width:"40%"})),(0,o.kt)("h4",null,"Check if Extension is activated"),(0,o.kt)("p",null,"It might be possible that you might have deactivated the extension by mistake.",(0,o.kt)("br",null),"Right click on the Requestly Extension Icon and see if your extension is enabled or not."),(0,o.kt)("img",{src:"/img/docs/troubleshooting/chrome/deactivate-popup.png",width:"20%"}),(0,o.kt)("h4",null,"Check if status of Group under which rule is present is active"),(0,o.kt)("p",null,"Groups allow you to organize rules into logical groups and enable/disable them in one go. ",(0,o.kt)("br",null)," For a Rule to work, it\u2019s group must be active."),(0,o.kt)("img",{src:"/img/docs/troubleshooting/chrome/sample-group.png",width:"70%"}))}s.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}}}]);