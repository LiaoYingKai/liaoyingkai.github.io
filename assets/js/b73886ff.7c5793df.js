(self.webpackChunkkai_dev=self.webpackChunkkai_dev||[]).push([[961],{269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return c},default:function(){return s}});var a=n(2122),l=n(9756),o=(n(7294),n(3905)),u=["components"],i={},r={unversionedId:"JavaScript/EventLoop",id:"JavaScript/EventLoop",isDocsHomePage:!1,title:"\u975e\u540c\u6b65\u7a0b\u5f0f\u8a2d\u8a08\u8207\u4e8b\u4ef6\u8ff4\u5708",description:"\u540c\u6b65",source:"@site/docs/JavaScript/EventLoop.md",sourceDirName:"JavaScript",slug:"/JavaScript/EventLoop",permalink:"/docs/JavaScript/EventLoop",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/JavaScript/EventLoop.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u89e3\u69cb\u8ce6\u503c(destructuring)",permalink:"/docs/JavaScript/Destructuring"},next:{title:"\u6a21\u7d44\u7cfb\u7d71",permalink:"/docs/JavaScript/Module"}},c=[{value:"\u540c\u6b65",id:"\u540c\u6b65",children:[]},{value:"\u975e\u540c\u6b65",id:"\u975e\u540c\u6b65",children:[]},{value:"Event loop",id:"event-loop",children:[]},{value:"W3C \u898f\u7bc4\u7684\u4f47\u5217\u985e\u578b",id:"w3c-\u898f\u7bc4\u7684\u4f47\u5217\u985e\u578b",children:[]},{value:"JS \u7684\u7570\u6b65",id:"js-\u7684\u7570\u6b65",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,o.kt)("p",null,"\u7a0b\u5f0f\u78bc\u57f7\u884c\u9806\u5e8f\u7531\u4e0a\u800c\u4e0b\uff0c\u4f9d\u5e8f\u57f7\u884c"),(0,o.kt)("h3",{id:"\u975e\u540c\u6b65"},"\u975e\u540c\u6b65"),(0,o.kt)("p",null,"\u5c07\u6703\u963b\u585e\u7684\u7a0b\u5f0f\u7d44\u6210\u4e00\u500b\u975e\u540c\u6b65\u7684\u51fd\u5f0f\uff0c\u5148\u5f80\u4efb\u52d9\u4f47\u5217(task queue / callback queue / )\u4e1f\uff0c\u5728\u4e3b\u7dda\u7a0b\u90fd\u57f7\u884c\u5b8c\u5f8c\uff0c\u6703\u57f7\u884c\u5728\u4efb\u52d9\u4f47\u5217\u7684\u7b49\u5019\u8655\u7406\u7684 function"),(0,o.kt)("h3",{id:"event-loop"},"Event loop"),(0,o.kt)("p",null,"\u4e8b\u4ef6\u8ff4\u5708\u53ef\u4ee5\u60f3\u6210\u4e00\u500b\u5167\u90e8\u7684\u8ff4\u5708\uff0c\u7576\u53ea\u6709\u5728\u547c\u53eb\u5806\u758a\u7a7a\u7a7a\u5982\u4e5f\u6642\uff0c\u624d\u6703\u628a\u4f47\u5217\u4e2d\u4efb\u52d9\u79fb\u56de\u547c\u53eb\u5806\u758a"),(0,o.kt)("h3",{id:"w3c-\u898f\u7bc4\u7684\u4f47\u5217\u985e\u578b"},"W3C \u898f\u7bc4\u7684\u4f47\u5217\u985e\u578b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Events(\u4e8b\u4ef6): EventTarget \u7269\u4ef6\u7570\u6b65\u5206\u6d3e\u5230\u5c0d\u61c9\u7684 Events \u7269\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"Parsing(\u89e3\u6790): HTML parser"),(0,o.kt)("li",{parentName:"ul"},"Callbacks(\u56de\u8abf): \u547c\u53eb\u7570\u6b65\u56de\u8abf\u51fd\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5916\u90e8\u8cc7\u6e90: \u8cc7\u6599\u5eab\u3001\u6a94\u6848\u3001Web I/O"),(0,o.kt)("li",{parentName:"ul"},"DOM \u8655\u7406\u7684\u53cd\u61c9: \u56de\u61c9 DOM \u8655\u7406\u6642\u7684\u5143\u7d20\u5c0d\u61c9\u4e8b\u4ef6")),(0,o.kt)("h3",{id:"js-\u7684\u7570\u6b65"},"JS \u7684\u7570\u6b65"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setTimeout"),(0,o.kt)("li",{parentName:"ul"},"setInterval"),(0,o.kt)("li",{parentName:"ul"},"XMLHttpRequest"),(0,o.kt)("li",{parentName:"ul"},"requestAnimationFrame"),(0,o.kt)("li",{parentName:"ul"},"WebSocket"),(0,o.kt)("li",{parentName:"ul"},"Worker"),(0,o.kt)("li",{parentName:"ul"},"\u67d0\u4e9b HTML5 API\uff0c\u4f8b\u5982 File API\u3001Web Database API"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u4f7f\u7528 onload \u7684 API")),(0,o.kt)("p",null,"\u57f7\u884c\u975e\u540c\u6b65\u7684\u9806\u5e8f\u7232\uff1a\u8ab0\u5148\u9032\u5165\u4efb\u52d9\u4f47\u5217\u7b49\u5f85\uff0c\u5c31\u8ab0\u5148\u57f7\u884c\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function aFunc(value, cb) {\n  setTimeout(cb, 1000, value);\n}\n\nfunction bFunc(value, cb) {\n  setTimeout(cb, 900, value);\n}\n\nfunction cbA(value) {\n  console.log(value);\n}\n\nfunction cbB(value) {\n  console.log(value);\n}\n\naFunc("a", cbA);\nbFunc("b", cbB);\n')),(0,o.kt)("p",null,"\u96d6\u7136 bFunc \u6bd4 aFunc \u665a\u57f7\u884c\uff0c\u4f46\u5b83\u6703\u6bd4 aFunc \u5feb\u4e00\u6b65\u56de\u5230\u4efb\u52d9\u4f47\u5217\uff0c\u6240\u4ee5\u5c31\u6703\u5148\u57f7\u884c bFunc \u518d\u57f7\u884c aFunc \u7684\u7d50\u679c"),(0,o.kt)("p",null,"\u591a\u5c64\u975e\u540c\u6b65\u600e\u9ebd\u57f7\u884c\uff1a"),(0,o.kt)("p",null,"\u6709\u9ede\u985e\u4f3c\u905e\u8ff4\uff0c\u7576\u7b2c\u4e00\u5c64\u975e\u540c\u6b65\u56de\u4f86\u7684\u6642\u5019\uff0c\u9032\u5165 JS \u4f47\u5217\u8655\u7406\uff0c\u9047\u5230\u975e\u540c\u6b65\u7684\u53c8\u518d\u4e1f\u51fa\u53bb\uff0c\u76f4\u5230\u90fd func \u90fd\u88ab\u57f7\u884c\u5b8c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg",alt:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png",alt:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stack"),"\uff1a\u5c31\u662f Function \u7684 Call Stack\uff0c\u7576\u57f7\u884c\u51fd\u5f0f\u6642\u53c8\u547c\u53eb\u4e86\u5176\u4ed6\u51fd\u5f0f\uff0c\u4fbf\u6703\u5f80\u4e0a\u5806\u7a4d\uff1b\u53cd\u4e4b\u5728\u57f7\u884c\u5b8c\u6210\u5f8c\u5f9e\u5806\u758a\u79fb\u9664\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Queue"),"\uff1a\u5c1a\u672a\u8655\u7406\u7684\u4efb\u52d9\uff0c\u7576 Stack \u6e05\u7a7a\u6642\uff0c\u5c07 Queue \u7684\u7b2c\u4e00\u9805\u642c\u53bb Stack\uff0c\u4e26\u958b\u59cb\u57f7\u884c"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u800c queue \u53c8\u5206\u6210 macrotask \u8207 microtask \uff0c\u901a\u5e38\u4e0d\u7279\u5225\u8b1b\u7684\u8a71\uff0c\u6703\u6307\u7684\u662f macrotask \uff0c\u800c\u904b\u884c\u6a5f\u5236\u662f\u7576\u6bcf\u4e00\u500b macrotask \u88ab\u63a8\u5165\u4e3b\u57f7\u884c\u5e8f( Stack )\u57f7\u884c\u5b8c\u7684\u6642\u5019(JS \u8173\u672c\u7b97\u7b2c\u4e00\u500b macrotask)\uff0c\u6703\u628a\u6240\u6709 microtask \u7684\u4efb\u52d9\u57f7\u884c\u5b8c\uff0c\u7136\u5f8c\u66f4\u65b0 UI \uff0c\u518d\u7e7c\u7e8c\u9019\u4e00\u500b\u5faa\u74b0\u4e00\u76f4\u4e0b\u53bb")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function withPromise() {\n  return new Promise(resolve => {\n    console.log('promise func')  // 3\n    resolve()\n  })\n}\nsetTimeout(() => console.log('setTimeout    1111'), 0)  /7\nwithPromise()\n  .then(() => console.log('then 1111'))  // 9\n  .then(() => setTimeout(() => withPromise() // 10\n    .then(() => console.log('then 2222')) // 11\n    .then(() => setTimeout(() => console.log('setTimeout    2222'), 0)) // 12\n    .then(() => console.log('then 3333')), 0)) //13\n  .then(() => setTimeout(() => console.log('setTimeout    33333'), 0)) //14\n\npromise func\nVM2898:9 then 1111\nVM2898:7 setTimeout    1111\nVM2898:3 promise func\nVM2898:11 then 2222\nVM2898:13 then 3333\nVM2898:14 setTimeout    33333\nVM2898:12 setTimeout    2222\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Heap"),"\uff1a\u4ee3\u8868\u5176\u4ed6\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5132\u5b58\u4e00\u5927\u5806\u8b8a\u6578\u3001\u7269\u4ef6\u4e4b\u985e\u7684")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Event Loop \uff1a \u5c31\u662f\u4e0d\u65b7\u7684\u5224\u65b7 stack \u662f\u5426\u7232\u7a7a\uff0c\u7a7a\u7684\u8a71\u62ff\u4e00\u500b queue \u5167\u7684\u4efb\u52d9\u653e\u5165 stack \u57f7\u884c"))))}s.isMDXComponent=!0}}]);