"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2807],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},o={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),y=a,m=d["".concat(c,".").concat(y)]||d[y]||o[y]||l;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18052:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const l={id:"sequence.relayer.RpcRelayerProto.SimulateResult",title:"Interface: SimulateResult",sidebar_label:"SimulateResult",custom_edit_url:null},i=void 0,s={unversionedId:"api/interfaces/sequence.relayer.RpcRelayerProto.SimulateResult",id:"api/interfaces/sequence.relayer.RpcRelayerProto.SimulateResult",title:"Interface: SimulateResult",description:"relayer.RpcRelayerProto.SimulateResult",source:"@site/docs/api/interfaces/sequence.relayer.RpcRelayerProto.SimulateResult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.relayer.RpcRelayerProto.SimulateResult",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.SimulateResult",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.relayer.RpcRelayerProto.SimulateResult",title:"Interface: SimulateResult",sidebar_label:"SimulateResult",custom_edit_url:null},sidebar:"sidebar",previous:{title:"SimulateArgs",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.SimulateArgs"},next:{title:"SimulateReturn",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.SimulateReturn"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"executed",id:"executed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"gasLimit",id:"gaslimit",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"gasUsed",id:"gasused",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"reason",id:"reason",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"succeeded",id:"succeeded",level:3},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:u};function o(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer"},"relayer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer.RpcRelayerProto"},"RpcRelayerProto"),".SimulateResult"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"executed"},"executed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"executed"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L181"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:181")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gaslimit"},"gasLimit"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"gasLimit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L186"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:186")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gasused"},"gasUsed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L185"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:185")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reason"},"reason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"reason"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L184"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:184")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"result"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L183"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:183")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"succeeded"},"succeeded"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"succeeded"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L182"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:182")))}o.isMDXComponent=!0}}]);