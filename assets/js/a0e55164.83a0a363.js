"use strict";(self.webpackChunkkai_dev=self.webpackChunkkai_dev||[]).push([[364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:""},i="Singleton Pattern",l={unversionedId:"DesignPatterns/SingletonPattern",id:"DesignPatterns/SingletonPattern",title:"Singleton Pattern",description:"",source:"@site/docs/DesignPatterns/SingletonPattern.md",sourceDirName:"DesignPatterns",slug:"/DesignPatterns/SingletonPattern",permalink:"/docs/DesignPatterns/SingletonPattern",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:""},sidebar:"tutorialSidebar",previous:{title:"Design Patterns",permalink:"/docs/category/design-patterns"},next:{title:"Provider Pattern",permalink:"/docs/DesignPatterns/ProviderPattern"}},c={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u61c9\u7528",id:"\u61c9\u7528",level:3},{value:"State management in React",id:"state-management-in-react",level:4}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"singleton-pattern"},"Singleton Pattern"),(0,a.kt)("p",null,"\u6b64\u7bc7\u539f\u6587\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.patterns.dev/posts/singleton-pattern"},"Singleton Pattern"),"\uff0c\u8a73\u7d30\u7684\u4ecb\u7d39\u53ef\u4ee5\u8b80\u9019\u7bc7\u6587\u7ae0\uff0c\u6703\u6709\u4e00\u500b\u6b65\u9a5f\u4e00\u6b65\u9a5f\u7684\u904e\u7a0b\uff0c\u4e26\u4e14\u642d\u914d\u5716\u7247\u505a\u8aaa\u660e"),(0,a.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"Singleton Pattern \u662f\u6307\uff0c\u61c9\u7528\u7a0b\u5f0f\u5728\u540c\u4e00\u6642\u9593\uff0c\u53ea\u6703\u540c\u6642\u5b58\u5728\u4e00\u500b\u5be6\u4f8b (instance)\uff0c\u7576\u6240\u6709\u4eba\u9700\u8981\u4f7f\u7528\u76f8\u95dc\u529f\u80fd\u6642\uff0c\u90fd\u662f\u4f7f\u7528\u540c\u4e00\u500b\u5be6\u4f8b\u53bb\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u6b64 Pattern \u53ef\u4ee5\u89e3\u6c7a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u56e0\u70ba\u540c\u4e00\u6642\u9593\u53ea\u6703\u6709\u4e00\u500b\u5be6\u4f8b\uff0c\u5982\u679c\u6b64\u5be6\u4f8b\u6703\u5728\u5404\u500b\u5730\u65b9\u88ab\u4f7f\u7528\u7684\u8a71\uff0c\u5c0d\u6bd4\u5728\u4f7f\u7528\u6642\u90fd\u5be6\u4f8b\u5316\uff0c\u53ef\u4ee5\u6709\u6548\u6e1b\u5c11\u8a18\u61b6\u9ad4\u7a7a\u9593\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0d\u540c\u7684 function \u6216\u662f component \u4e4b\u9593\uff0c\u5982\u679c\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u5be6\u4f8b\uff0c\u53ef\u80fd\u9700\u8981\u91dd\u5c0d\u8cc7\u6599\u7684\u9806\u5e8f\u3001\u5132\u5b58\u505a\u984d\u5916\u7684\u5224\u65b7\u8207\u8abf\u6574\uff0c\u4f7f\u7528\u6b64 Pattern \u53ef\u4ee5\u6e1b\u5c11\u4f86\u6e90\u7684\u5224\u65b7\uff0c\u8b93\u7a0b\u5f0f\u78bc\u7dad\u8b77\u6027\u63d0\u9ad8\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter Class"',title:'"Counter','Class"':!0},'let instance;\nlet counter = 0;\n\nclass Counter {\n  constructor() {\n    if (instance) {\n      throw new Error("You can only create one instance!");\n    }\n    instance = this;\n  }\n\n  getInstance() {\n    return this;\n  }\n\n  getCount() {\n    return counter;\n  }\n\n  increment() {\n    return ++counter;\n  }\n\n  decrement() {\n    return --counter;\n  }\n}\n\nconst counter1 = new Counter();\nconst counter2 = new Counter();\n// Error: You can only create one instance!\n')),(0,a.kt)("p",null,"\u6211\u5011\u5efa\u7acb\u4e86\u4e00\u500b\u7c21\u55ae\u7684 Singleton Class\uff0c\u63a5\u4e0b\u4f86\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"},"Object.freeze")," \u53bb\u5c07 class \u5be6\u4f8b\u5316\u51fa\u4f86\u7684\u7269\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u51cd\u7d50")," \u8d77\u4f86\u4e26 export \u51fa\u53bb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Export the instance"',title:'"Export',the:!0,'instance"':!0},"const singletonCounter = Object.freeze(new Counter());\nexport default singletonCounter;\n")),(0,a.kt)("p",null,"\u7576\u7136\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u7528\u4e00\u822c\u7684 object \u4f86\u5b8c\u6210\u4e00\u6a23\u7684\u9700\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Using a regular object"',title:'"Using',a:!0,regular:!0,'object"':!0},"let count = 0;\n\nconst counter = {\n  increment() {\n    return ++count;\n  },\n  decrement() {\n    return --count;\n  },\n};\n\nObject.freeze(counter);\nexport {counter};\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0a\uff0c\u5c31\u662f\u628a\u5be6\u4f8b\u53d6\u51fa\u4f86\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Demo"',title:'"Demo"'},'import Counter from "./Counter.js";\n\nfunction Demo() {\n  return (\n    <button\n      onClick={() => {\n        Counter.increment();\n        console.log("Counter total: ", Counter.getCount());\n      }}\n    >\n      count ++\n    </button>\n  );\n}\n')),(0,a.kt)("h3",{id:"\u61c9\u7528"},"\u61c9\u7528"),(0,a.kt)("h4",{id:"state-management-in-react"},"State management in React"),(0,a.kt)("p",null,"\u6587\u7ae0\u6700\u5f8c\u6709\u8aaa\u5230\uff0c\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"Redux")," \u6216\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"React Context")," \u90fd\u662f\u6709\u4f7f\u7528 Singleton Pattern \uff0c\u4ed6\u5011\u540c\u6642\u7b26\u5408\u5e7e\u500b\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 Global \u8a3b\u518a\u552f\u4e00\u7684\u5be6\u4f8b"),(0,a.kt)("li",{parentName:"ol"},"state \u662f\u552f\u8b80\u7684\uff0c\u8981\u4fee\u6539\u90fd\u8981\u900f\u904e\u7279\u5b9a\u7684 function \u53bb\u4fee\u6539"),(0,a.kt)("li",{parentName:"ol"},"pure function \u53bb\u6539\u8b8a state")))}m.isMDXComponent=!0}}]);