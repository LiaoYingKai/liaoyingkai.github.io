(self.webpackChunkkai_dev=self.webpackChunkkai_dev||[]).push([[560],{1382:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],l={},s={unversionedId:"JavaScript/Module",id:"JavaScript/Module",isDocsHomePage:!1,title:"\u6a21\u7d44\u7cfb\u7d71",description:"\u7528\u65bc\u7d44\u7e54\u8207\u7ba1\u7406\u7a0b\u5f0f\u78bc\u7684\u65b9\u5f0f",source:"@site/docs/JavaScript/Module.md",sourceDirName:"JavaScript",slug:"/JavaScript/Module",permalink:"/docs/JavaScript/Module",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/JavaScript/Module.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u975e\u540c\u6b65\u7a0b\u5f0f\u8a2d\u8a08\u8207\u4e8b\u4ef6\u8ff4\u5708",permalink:"/docs/JavaScript/EventLoop"},next:{title:"Promise",permalink:"/docs/JavaScript/Promise"}},c=[{value:"\u63a8\u85a6\u95b1\u8b80\uff1a JavaScript \u6a21\u7d44\u5316\u4e03\u65e5\u8ac7",id:"\u63a8\u85a6\u95b1\u8b80\uff1a-javascript-\u6a21\u7d44\u5316\u4e03\u65e5\u8ac7",children:[]},{value:"ES6",id:"es6",children:[{value:"\u55ae\u500b\u6a94\u6848\u8f38\u5165/\u8f38\u51fa",id:"\u55ae\u500b\u6a94\u6848\u8f38\u5165\u8f38\u51fa",children:[]},{value:"\u591a\u500b\u6a94\u6848\u8f38\u5165/\u8f38\u51fa",id:"\u591a\u500b\u6a94\u6848\u8f38\u5165\u8f38\u51fa",children:[]}]}],u={toc:c};function p(n){var e=n.components,t=(0,r.Z)(n,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7528\u65bc\u7d44\u7e54\u8207\u7ba1\u7406\u7a0b\u5f0f\u78bc\u7684\u65b9\u5f0f")),(0,o.kt)("p",null,"\u5728 JavaScript \u88e1\u9762\uff0c\u4e26\u6c92\u6709\u771f\u6b63\u6240\u8b02\u7684\u79c1\u6709\u3001\u516c\u958b\uff0c\u6240\u4ee5\u8981\u900f\u904e\u4e00\u4e9b\u65b9\u5f0f\u5be6\u4f5c\u6a21\u7d44\uff0c\u8b93\u7a0b\u5f0f\u78bc\u9054\u5230\u5340\u9694\u6216\u5171\u7528"),(0,o.kt)("p",null,"\u5728\u6700\u65e9\u671f\u7684\u65b9\u5f0f\uff0c\u662f\u4f7f\u7528 script \u7684\u65b9\u5f0f\u505a\u5230\u6a21\u7d44\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <title>Backbone.js Todos</title>\n        <link rel="stylesheet" href="todos.css"/>\n    </head>\n\n    <body>\n        <script src="../../test/vendor/json2.js"><\/script>\n        <script src="../../test/vendor/jquery.js"><\/script>\n        <script src="../../test/vendor/underscore.js"><\/script>\n        <script src="../../backbone.js"><\/script>\n        <script src="../backbone.localStorage.js"><\/script>\n        <script src="todos.js"><\/script>\n    </body>\n\n    \x3c!-- (...) --\x3e\n\n</html>\n')),(0,o.kt)("p",null,"\u4f46\u554f\u984c\u975e\u5e38\u660e\u986f\uff0c\u500b\u5225\u6a94\u6848\u4e0d\u80fd\u5f15\u5165\u500b\u5225\u6a94\u6848\u5167\u7684\u6771\u897f\uff0c\u56e0\u7232\u9019\u7a2e\u65b9\u5f0f\u662f\u5c07\u6703\u5171\u7528\u7684\u8b8a\u6578\u653e\u5728 windows \u5e95\u4e0b\uff0c\u4e0d\u50c5\u6703\u6c61\u67d3\u5168\u57df\uff0c\u4e5f\u662f\u8ddf\u5176\u4ed6\u6a94\u6848\u5171\u540c\u64cd\u4f5c\u4e00\u500b\u8b8a\u6578"),(0,o.kt)("p",null,"\u4e4b\u5f8c\u958b\u59cb\u4f7f\u7528 module pattern \uff0c\u4f7f\u7528 IIFE \u7684\u7279\u6027\uff0c\u5c07\u8b8a\u6578\u8207\u65b9\u6cd5\u9396\u5728\u4f5c\u7528\u57df\u88e1\u9762\uff0c\u53ea\u80fd\u900f\u904e\u7279\u5b9a\u7684\u65b9\u5f0f\u53d6\u5f97\u88e1\u9762\u7684\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// The module pattern\nvar feature = (function () {\n  // Private variables and functions\n  var privateThing = "secret";\n  var publicThing = "not secret";\n\n  var changePrivateThing = function () {\n    privateThing = "super secret";\n  };\n\n  var sayPrivateThing = function () {\n    console.log(privateThing);\n    changePrivateThing();\n  };\n\n  // Public API\n  return {\n    publicThing: publicThing,\n    sayPrivateThing: sayPrivateThing,\n  };\n})();\n\nfeature.publicThing; // "not secret"\n\n// Logs "secret" and changes the value of privateThing\nfeature.sayPrivateThing();\n')),(0,o.kt)("p",null,"\u7136\u800c\u9019\u6a23\u7684\u65b9\u5f0f\u96d6\u7136\u9054\u5230\u4e86\u6a21\u7d44\u5316\u7a0b\u5f0f\u78bc\uff0c\u4f46\u4e5f\u9084\u662f\u6709\u5e7e\u500b\u554f\u984c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6c92\u8fa6\u6cd5\u5728\u7a0b\u5f0f\u4e2d\u4f5c\u6a21\u7d44\u8f09\u5165"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u7d44\u4e4b\u9593\u7684\u76f8\u4f9d\u6027\u4e0d\u6613\u7ba1\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u7570\u6b65\u8f09\u5165\u6a21\u7d44"),(0,o.kt)("li",{parentName:"ul"},"\u9664\u932f\u8207\u6e2c\u8a66\u90fd\u4e0d\u5bb9\u6613"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5927\u578b\u5c08\u6848\u4e2d\u4e0d\u6613\u7ba1\u7406")),(0,o.kt)("p",null,"\u6240\u4ee5\u8fd1\u671f\u5c31\u767c\u5c55\u51fa\u4e86\u5169\u5957\u7684\u6a21\u7d44\u7cfb\u7d71\uff1aCommonJS Modules / Asynchronous Module Definition (AMD)\uff0c\u800c ES6 \u6574\u5408\u4e86\u5169\u7a2e\u7684\u512a\u7f3a\u9ede\uff0c\u5be6\u4f5c\u51fa\u539f\u751f\u7684\u6a21\u7d44\u7cfb\u7d71\uff1a"),(0,o.kt)("h3",{id:"\u63a8\u85a6\u95b1\u8b80\uff1a-javascript-\u6a21\u7d44\u5316\u4e03\u65e5\u8ac7"},"\u63a8\u85a6\u95b1\u8b80\uff1a ",(0,o.kt)("a",{parentName:"h3",href:"http://huangxuan.me/js-module-7day/#/1"},"JavaScript \u6a21\u7d44\u5316\u4e03\u65e5\u8ac7")),(0,o.kt)("h2",{id:"es6"},"ES6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'ES6 \u7684\u6a21\u7d44\u7a0b\u5f0f\u78bc\u6703\u81ea\u52d5\u8b8a\u6210 strict-mode(\u56b4\u683c\u6a21\u5f0f)\uff0c\u4e0d\u8ad6\u4f60\u6709\u6c92\u6709\u4f7f\u7528"use strict"\u5728\u7a0b\u5f0f\u78bc\u4e2d\u3002'),(0,o.kt)("li",{parentName:"ul"},"ES6 \u7684\u6a21\u7d44\u662f\u4e00\u500b\u6a94\u6848\u4e00\u500b\u6a21\u7d44"),(0,o.kt)("li",{parentName:"ul"},"ES6 \u6a21\u7d44\u4f7f\u7528 export(\u8f38\u51fa)\u8207 import(\u8f38\u5165)\u8a9e\u53e5\u4f86\u9032\u884c\u6a21\u7d44\u8f38\u51fa\u8207\u8f38\u5165\u3002\u8f38\u51fa\u901a\u5e38\u4f4d\u65bc\u6a94\u6848\u6700\u5f8c\uff0c\u8f38\u5165\u4f4d\u65bc\u6700\u524d\u9762\u3002")),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\u6a21\u7d44\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u5c31\u662f\u5c07\u9700\u8981\u7d66\u5176\u4ed6\u7a0b\u5f0f\u78bc\u4f7f\u7528\u7684\u90e8\u5206 export \u51fa\u53bb\uff0c\u9700\u8981\u4f7f\u7528\u7684\u6a94\u6848 import \u9032\u4f86\u5c31\u53ef\u4ee5\uff0c\u800c\u4e0d\u540c\u7684 export \u65b9\u5f0f\u4e5f\u6703\u5c0d\u61c9\u4e0d\u540c\u7684 import \u65b9\u5f0f"),(0,o.kt)("h3",{id:"\u55ae\u500b\u6a94\u6848\u8f38\u5165\u8f38\u51fa"},"\u55ae\u500b\u6a94\u6848\u8f38\u5165/\u8f38\u51fa"),(0,o.kt)("p",null,"\u8f38\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function aFunction(param){\n  return param * param\n}\n\nexport default aFunction\n// or\nexport default aFunction(param){\n  return param * param\n}\n")),(0,o.kt)("p",null,"\u8f38\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import aFunction from "./lib2.js";\n\nconsole.log(aFunction(5));\n// \u4e5f\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u540d\u7a31\nimport square from "./lib2.js";\n\nconsole.log(square(5));\n')),(0,o.kt)("h3",{id:"\u591a\u500b\u6a94\u6848\u8f38\u5165\u8f38\u51fa"},"\u591a\u500b\u6a94\u6848\u8f38\u5165/\u8f38\u51fa"),(0,o.kt)("p",null,"\u8f38\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'export const aString = "test";\n\nexport function aFunction() {\n  console.log("function test");\n}\n\nexport const aObject = { a: 1 };\n\nexport class aClass {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n')),(0,o.kt)("p",null,"\u8f38\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u7528\u82b1\u62ec\u865f\uff0c\u53d6\u5c0d\u61c9\u7684 module\nimport { aString, aObject, aFunction, aClass } from "./lib.js";\n\nconsole.log(aString);\nconsole.log(aObject);\n\n// \u4e5f\u53ef\u4ee5\u5728\u53d6 module \u7684\u6642\u5019\u91cd\u65b0\u547d\u540d\nimport { aString as newString } from "./lib.js";\n\nconsole.log(newString);\n\n// or \u4f7f\u7528\u842c\u7528\u5b57\u5143(*)\u518d\u52a0\u4e0a\u4e00\u500b\u6a21\u7d44\u540d\u7a31\nimport * as myModule from "./lib.js";\n\nconsole.log(myModule.aString);\nconsole.log(myModule.aObject);\n')))}p.isMDXComponent=!0}}]);