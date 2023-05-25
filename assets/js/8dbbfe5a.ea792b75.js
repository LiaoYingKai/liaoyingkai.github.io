"use strict";(self.webpackChunkkai_dev=self.webpackChunkkai_dev||[]).push([[170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="useSetState",s={unversionedId:"ReactUse/use-set-state",id:"ReactUse/use-set-state",title:"useSetState",description:"\u7576\u7b26\u5408\u4ee5\u4e0b\u689d\u4ef6\u6642\uff0cuseSetState hook \u53ef\u4ee5\u63d0\u4f9b\u4e00\u7a2e\u66f4\u512a\u96c5\u7684\u5beb\u6cd5\uff1a",source:"@site/docs/ReactUse/use-set-state.md",sourceDirName:"ReactUse",slug:"/ReactUse/use-set-state",permalink:"/docs/ReactUse/use-set-state",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"react-use",permalink:"/docs/category/react-use"}},u={},i=[{value:"Before",id:"before",level:2},{value:"After",id:"after",level:2}],c={toc:i},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usesetstate"},"useSetState"),(0,a.kt)("p",null,"\u7576\u7b26\u5408\u4ee5\u4e0b\u689d\u4ef6\u6642\uff0cuseSetState hook \u53ef\u4ee5\u63d0\u4f9b\u4e00\u7a2e\u66f4\u512a\u96c5\u7684\u5beb\u6cd5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8981\u6539\u8b8a\u7684\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ol"},"\u60f3\u8981\u66f4\u65b0\u503c\u53bb\u89f8\u767c ",(0,a.kt)("inlineCode",{parentName:"li"},"re-render"))),(0,a.kt)("h2",{id:"before"},"Before"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Original useState Example"',title:'"Original',useState:!0,'Example"':!0},'import {useState} from "react";\n\nconst Demo = () => {\n  const [value, setValue] = useState({\n    hello: "",\n    count: 0,\n  });\n\n  return (\n    <div>\n      <button\n        onClick={() =>\n          // tips\n          // value.hello = world <- \u76f4\u63a5\u4fee\u6539 value \u5167\u7684\u503c\u662f\u4e0d\u6703\u89f8\u767c re-render\n          setState({\n            ...value,\n            hello: "world",\n          })\n        }\n      >\n        hello\n      </button>\n      <button\n        onClick={() => {\n          setState((prevState) => ({\n            ...prevState,\n            count: (prevState.count || 0) + 1,\n          }));\n        }}\n      >\n        count\n      </button>\n    </div>\n  );\n};\n')),(0,a.kt)("h2",{id:"after"},"After"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="useSetState Example"',title:'"useSetState','Example"':!0},'import {useSetState} from "react-use";\n\nconst Demo = () => {\n  const [value, setValue] = useSetState({\n    hello: "",\n    count: 0,\n  });\n\n  return (\n    <div>\n      <button onClick={() => setValue({hello: "world"})}>hello</button>\n      <button\n        onClick={() => {\n          setValue((prevState) => ({\n            count: (prevState.count || 0) + 1,\n          }));\n        }}\n      >\n        count\n      </button>\n    </div>\n  );\n};\n')))}f.isMDXComponent=!0}}]);