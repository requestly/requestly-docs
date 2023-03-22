"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=r(87462),i=(r(67294),r(3905)),n=r(26612),a=r(51008);const l={sidebar_position:2,title:"Url Redirect"},s=void 0,c={unversionedId:"http-modifications/redirect-rule",id:"http-modifications/redirect-rule",title:"Url Redirect",description:"",source:"@site/docs/browser-extension/opera/http-modifications/redirect-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/redirect-rule",permalink:"/browser-extension/opera/http-modifications/redirect-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/opera/http-modifications/redirect-rule.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Url Redirect"},sidebar:"tutorialSidebar",previous:{title:"Understanding different Rule Types",permalink:"/browser-extension/opera/http-modifications/overview"},next:{title:"Modify Replace String (Switch Hosts, API Endpoints)",permalink:"/browser-extension/opera/http-modifications/replace-rule"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.ZP,{platform:n.iw.OPERA,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},51008:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),i=(r(67294),r(3905));const n={toc:[{value:"Configuring Rule",id:"configuring-rule",level:3},{value:"Demo",id:"demo",level:3},{value:"Testing Rule",id:"testing-rule",level:2},{value:"Popular use cases",id:"popular-use-cases",level:3},{value:"Examples",id:"examples",level:2},{value:"FAQ",id:"faq",level:2}]};function a(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Redirect Rule helps in changing the HTTP Requests location to a new destination as per the configured rule, so that the response is transparently served from the new location as if that was the original request."),(0,i.kt)("h3",{id:"configuring-rule"},"Configuring Rule"),(0,i.kt)("img",{src:"/img/docs/annotated-redirect-rule.png",alt:"Redirect Rule"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Source Condition"),": Source condition is where you set criteria for which requests will match the. You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,i.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Destination URL"),": The destination to which the users will be redirected to based on the source condition."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Source Filters"),": You can define advanced targeting conditions and restrict rules to be applied on specific request types, request methods, or request payload. Learn more about source filters ",(0,i.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)("center",null,(0,i.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/lOt1kGKTq-w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,i.kt)("h2",{id:"testing-rule"},"Testing Rule"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To test if the rule is properly configured or not, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Test this Rule")," feature in the bottom of the Rule Editor. This can help you verify if the source conditions are matching to the url you want to test or not. ",(0,i.kt)("img",{src:"/img/docs/http-modifications/testing-rule.png",alt:"Testing Rule",width:"50%"}))),(0,i.kt)("h3",{id:"popular-use-cases"},"Popular use cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redirect Production to Local Environment:")," Map your production scripts or APIs to your local running code and test your local code directly on production sites without deployment. ",(0,i.kt)("a",{parentName:"li",href:"https://requestly.io/blog/how-to-load-local-js-files-on-live-production-sites"},"Here's")," an article with more explanation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redirect to local System files (Map Local):")," With Map Local feature, you can directly replace the production scripts with the local files. Any change in the local files will be instantly reflected on production. You can find more details ",(0,i.kt)("a",{parentName:"li",href:"../../../desktop-app/mac/features/map-local"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test API version changes:")," Suppose there is a new version of some API which you are using. To test the backward compatibility of the API, you can just set up a redirect rule to redirect all URLs from the older version to the newer version and check if your application behaves as expected. This way, you don't need to change a single line of your code and test the API upgrades."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix Broken URLs, Redirect dead bookmarks, and Create URL shortcuts:")," You can setup a redirect rule to fix some broken URLs, redirect the dead bookmarks to new working bookmarks and create URL shortcuts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Swap Tag Manager scripts from production to staging/dev environment:")," Test your dev implementation in tag manager scripts like Adobe DTM, Tealium Tag, Google Tag Manager Containers before pushing them live on client websites. Learn more ",(0,i.kt)("a",{parentName:"li",href:"https://requestly.io/blog/replace-adobe-launch-production-script-with-development-script"},"here"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules#sharedList/1679464393107-Google-to-DuckDuckGo"},"Redirect Google queries to Duckduckgo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.requestly.io/shared-lists/viewer/1643984301107-Load-Google-Analytics-in-Debug-Mode?template=true"},"Load Google Analytics in Debug Mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules#sharedList/1679464587448-Change-the-Default-Dictionary-in-Adobe-Acrobat-Reader-to-Merriam-Webster"},"Change the Default Dictionary in Adobe Acrobat Reader to Merriam-Webster"))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check if Rule executed or not"),(0,i.kt)("div",null,"Use ",(0,i.kt)("a",{href:"/guides/know-if-rule-executed-on-page"},"this")," guide to check if the rule executed or not")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Can i redirect https url to http urls"),(0,i.kt)("div",null,"Yes, Redirect Rule supports redirecting from https to http and vice-versa")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Can it redirect to a local file"),(0,i.kt)("div",null,"Right now this is not possible in Browser Extension. But you can use our ",(0,i.kt)("a",{href:"../../../desktop-app/mac/features/map-local"},"desktop app")," to redirect to a local file (Map Local)")))}a.isMDXComponent=!0}}]);