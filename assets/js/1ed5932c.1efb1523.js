"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(64894),i=r(70711);const l={sidebar_position:10,title:"Map Remote"},s=void 0,p={unversionedId:"features/map-remote",id:"features/map-remote",title:"Map Remote",description:"",source:"@site/docs/desktop-app/linux/features/map-remote.mdx",sourceDirName:"features",slug:"/features/map-remote",permalink:"/desktop-app/linux/features/map-remote",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/map-remote.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Map Remote"},sidebar:"tutorialSidebar",previous:{title:"Sharing Rules",permalink:"/desktop-app/linux/features/sharing-rules"},next:{title:"Map Local",permalink:"/desktop-app/linux/features/map-local"}},u={},c=[],m={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{platform:a.iw.LINUX,mdxType:"Component"}))}d.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},70711:(e,t,r)=>{r.d(t,{ZP:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={toc:[{value:"Common Usage",id:"common-usage",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Matching Requests",id:"matching-requests",level:2},{value:"Examples",id:"examples",level:2},{value:"Map local resource on production site",id:"map-local-resource-on-production-site",level:3},{value:"Switch domain to staging environment using replace rule",id:"switch-domain-to-staging-environment-using-replace-rule",level:3},{value:"Map Local",id:"map-local",level:2}]};function i(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This feature lets you change the request's location to a new destination location such that the response is transparently served from the new location as if it was the original request."),(0,n.kt)("h2",{id:"common-usage"},"Common Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use development/staging endpoints on your production sites without changing the code so that you can directly test your local code on production sites without deployment."),(0,n.kt)("li",{parentName:"ul"},"You can switch your domain to local environment for testing new changes which have not been deployed."),(0,n.kt)("li",{parentName:"ul"},"You can map HTTP request to an HTTPS destination and vice versa."),(0,n.kt)("li",{parentName:"ul"},"You can test the backward compatibility of a new API by mapping all requests to the newer version of the API.")),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"You can use Redirect/Replace rule to setup mappings."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/browser-extension/chrome/http-modifications/redirect-rule"},"Redirect rule")," allows you to redirect network requests from one URL to another."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/browser-extension/chrome/http-modifications/replace-rule"},"Replace rule")," allows you to replace a part of the URL with another string.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can check out the demo here:."),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lOt1kGKTq-w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,n.kt)("h2",{id:"matching-requests"},"Matching Requests"),(0,n.kt)("p",null,"All the Requestly rules can match requests based on URL, host, path and ",(0,n.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/rule-operators"},"rule operators"),". With the help of these operators you\ncan define rules to match using wildcard, regular expressions or string matching. You can also perform ",(0,n.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/advance-targetting"},"advanced targeting")," on the requests."),(0,n.kt)("p",null,"You can perform regex pattern matching in replace rule to extract information from the url:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example: Extract domain, pathName and extension for Urls ending with ",(0,n.kt)("inlineCode",{parentName:"strong"},".jpg"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/(https:\\/\\/[^\\/]*)(.+)(\\.jpg)$/i\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$1 is the value of 1st group expression. \u2013 DomainName"),(0,n.kt)("li",{parentName:"ul"},"$2 is the value of 2nd group expression \u2013 PathName but not file extension"),(0,n.kt)("li",{parentName:"ul"},"$3 is the value of 3rd group expression \u2013 File extension .jpg in this case")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"map-local-resource-on-production-site"},"Map local resource on production site"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Map local resource on production site",src:r(7594).Z,width:"1684",height:"488"})),(0,n.kt)("p",null,"You can find the above redirect rule ",(0,n.kt)("a",{parentName:"p",href:"https://app.requestly.io/rules/#sharedList/1675507924144-map-local-to-production"},"here"),"."),(0,n.kt)("h3",{id:"switch-domain-to-staging-environment-using-replace-rule"},"Switch domain to staging environment using replace rule"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Switch domain to staging environment using replace rule",src:r(1532).Z,width:"2236",height:"488"})),(0,n.kt)("p",null,"You can find the above replace rule ",(0,n.kt)("a",{parentName:"p",href:"https://app.requestly.io/rules/#sharedList/1675508715615-switch-domain-to-staging"},"here"),"."),(0,n.kt)("h2",{id:"map-local"},"Map Local"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/map-local"},"Map Local")," tool which helps to serve requests from your local file."))}i.isMDXComponent=!0},7594:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/map-local-to-prod-3029d731aa40711119e06fc5a4cf4741.png"},1532:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/switch-domain-to-staging-b6469524ceb156ddb096ea410b638eb9.png"}}]);