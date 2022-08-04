"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,u=c["".concat(d,".").concat(m)]||c[m]||k[m]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"sequence.provider.WalletEventTypes",title:"Interface: WalletEventTypes",sidebar_label:"WalletEventTypes",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/sequence.provider.WalletEventTypes",id:"api/interfaces/sequence.provider.WalletEventTypes",title:"Interface: WalletEventTypes",description:"sequence.provider.WalletEventTypes",source:"@site/docs/api/interfaces/sequence.provider.WalletEventTypes.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.provider.WalletEventTypes",permalink:"/api/interfaces/sequence.provider.WalletEventTypes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.provider.WalletEventTypes",title:"Interface: WalletEventTypes",sidebar_label:"WalletEventTypes",custom_edit_url:null},sidebar:"sidebar",previous:{title:"TypedEventEmitter",permalink:"/api/interfaces/sequence.provider.TypedEventEmitter"},next:{title:"WalletProvider",permalink:"/api/interfaces/sequence.provider.WalletProvider"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"accountsChanged",id:"accountschanged",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"chainChanged",id:"chainchanged",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"close",id:"close",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"connect",id:"connect",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"disconnect",id:"disconnect",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"networks",id:"networks",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"open",id:"open",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"walletContext",id:"walletcontext",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-7",level:5},{value:"Defined in",id:"defined-in-7",level:4}],s={toc:o};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.provider"},"provider"),".WalletEventTypes"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WalletEventTypes"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ProviderEventTypes"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderEventTypes"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"accountschanged"},"accountsChanged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"accountsChanged"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"origin?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"origin?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accounts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"origin?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L115"},"sequence.js/packages/provider/src/types.ts:115")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chainchanged"},"chainChanged"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"chainChanged"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"chainIdHex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"chainIdHex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainIdHex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L116"},"sequence.js/packages/provider/src/types.ts:116")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"close"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"error?"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ProviderRpcError"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderRpcError")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"error?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.provider.ProviderRpcError"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderRpcError")))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L110"},"sequence.js/packages/provider/src/types.ts:110")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"connect"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"connectDetails"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ConnectDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectDetails")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"connectDetails"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"connectDetails")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.provider.ConnectDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectDetails")))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L112"},"sequence.js/packages/provider/src/types.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disconnect"},"disconnect"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"disconnect"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"error?"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ProviderRpcError"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderRpcError")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"error?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.provider.ProviderRpcError"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderRpcError")))))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L113"},"sequence.js/packages/provider/src/types.ts:113")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"networks"},"networks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"networks"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"networks"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.network.NetworkConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"NetworkConfig")),"[]) => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"networks"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networks")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.network.NetworkConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"NetworkConfig")),"[]")))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L118"},"sequence.js/packages/provider/src/types.ts:118")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"open"},"open"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"open"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"openInfo"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"error?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"session?"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.WalletSession"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletSession"))," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }) => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"openInfo"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openInfo")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openInfo.chainId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openInfo.error?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openInfo.session?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.provider.WalletSession"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletSession")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openInfo.sessionId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L109"},"sequence.js/packages/provider/src/types.ts:109")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"walletcontext"},"walletContext"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"walletContext"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"walletContext"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"walletContext"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"walletContext")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext")))))),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/provider/src/types.ts#L119"},"sequence.js/packages/provider/src/types.ts:119")))}k.isMDXComponent=!0}}]);