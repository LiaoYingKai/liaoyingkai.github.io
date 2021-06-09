(self.webpackChunkkai_dev=self.webpackChunkkai_dev||[]).push([[983],{5259:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(2122),l=t(9756),o=(t(7294),t(3905)),a=["components"],i={},c={unversionedId:"JavaScript/Promise",id:"JavaScript/Promise",isDocsHomePage:!1,title:"Promise",description:"\u5c08\u9580\u7528\u8a9e",source:"@site/docs/JavaScript/Promise.md",sourceDirName:"JavaScript",slug:"/JavaScript/Promise",permalink:"/docs/JavaScript/Promise",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/JavaScript/Promise.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u7d44\u7cfb\u7d71",permalink:"/docs/JavaScript/Module"},next:{title:"\u5c55\u958b\u904b\u7b97\u7b26\u8207\u5176\u9918\u904b\u7b97\u7b26",permalink:"/docs/JavaScript/SpreadOperator"}},s=[{value:"\u5c08\u9580\u7528\u8a9e",id:"\u5c08\u9580\u7528\u8a9e",children:[]},{value:"\u72c0\u614b",id:"\u72c0\u614b",children:[]},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[]},{value:"then \u8207 catch",id:"then-\u8207-catch",children:[]},{value:"throw \u8207 reject",id:"throw-\u8207-reject",children:[]},{value:"then",id:"then",children:[]},{value:"Promise.resolve \u8207 Promise.reject",id:"promiseresolve-\u8207-promisereject",children:[]},{value:"Promise.all \u8207 Promise.race",id:"promiseall-\u8207-promiserace",children:[]}],u={toc:s};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5c08\u9580\u7528\u8a9e"},"\u5c08\u9580\u7528\u8a9e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"promise"),"\xa0(\u627f\u8afe)\u662f\u4e00\u500b\u5e36\u6709\u9075\u7167\u9019\u500b\u898f\u683c\u7684 then \u65b9\u6cd5\u7684\u7269\u4ef6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"thenable"),"\xa0 \u662f\u4e00\u500b\u6709\u5b9a\u7fa9 then \u65b9\u6cd5\u7684\u7269\u4ef6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\xa0 \u5408\u6cd5\u7684 JavaScript \u503c(\u5305\u542b undefined\u3001thenable \u8207 promise)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"exception"),"\xa0(\u4f8b\u5916)\u4f7f\u7528 throw \u8a9e\u53e5\u4e1f\u51fa\u4f86\u7684\u503c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reason"),"\xa0(\u7406\u7531)\u662f\u8868\u660e\u70ba\u4ec0\u9ebc promise \u88ab\u62d2\u7d55(rejected)\u7684\u503c")),(0,o.kt)("h2",{id:"\u72c0\u614b"},"\u72c0\u614b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pending: \u7b49\u5f85\u4e2d\uff0c\u53ef\u80fd\u8f49\u8b8a\u6210 fulfilled \u6216\u662f rejected"),(0,o.kt)("li",{parentName:"ul"},"Fulfilled: \u5df2\u5be6\u73fe\uff0c\u4e0d\u80fd\u518d\u8f49\u8b8a\u6210\u5176\u4ed6\u72c0\u614b"),(0,o.kt)("li",{parentName:"ul"},"Rejected: \u5df2\u62d2\u7d55\uff0c\u4e0d\u80fd\u518d\u8f49\u8b8a\u6210\u5176\u4ed6\u72c0\u614b")),(0,o.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,o.kt)("p",null,"\u900f\u904e new Promise \u5efa\u69cb\u51fa\u4e00\u500b promise \u7269\u4ef6\uff0c\u50b3\u5165\u5169\u500b callback \uff0c\u4e00\u500b\u8655\u7406\u7576\u6709\u6b63\u78ba\u503c\u7684\u6642\u5019\uff0c\u4e00\u500b\u8655\u7406\u62d2\u7d55\u7684\u6642\u5019"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = new Promise(function (resolve, reject) {\n  // \u6210\u529f\u6642\n  resolve(value);\n  // \u5931\u6557\u6642\n  reject(reason);\n});\n\npromise.then(\n  function (value) {\n    // on fulfillment(\u5df2\u5be6\u73fe\u6642)\n  },\n  function (reason) {\n    // on rejection(\u5df2\u62d2\u7d55\u6642)\n  }\n);\n")),(0,o.kt)("p",null,"\u800c Promise \u901a\u5e38\u5efa\u7acb\u6642\u5c31\u8981\u6c7a\u5b9a\u8981\u57f7\u884c resolve \u9084\u662f reject \u4e86\uff0c\u6240\u4ee5\u6703\u518d\u7528\u4e00\u500b Function \u5305\u8d77\u4f86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function asyncFunction(value) {\n  return new Promise(function (resolve, reject) {\n    if (value) resolve(value);\n    // \u5df2\u5be6\u73fe\uff0c\u6210\u529f\n    else reject(reason); // \u6709\u932f\u8aa4\uff0c\u5df2\u62d2\u7d55\uff0c\u5931\u6557\n  });\n}\n")),(0,o.kt)("p",null,"\u800c\u4f7f\u7528\u9019\u6a23\u7684\u5efa\u69cb\u65b9\u5f0f\uff0c\u6709\u5e7e\u500b\u539f\u56e0"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'\u66b4\u9732\u7684\u5efa\u69cb\u5f0f\u6a23\u5f0f: Promise \u53ea\u662f\u500b\u7528\u4f86\u5305\u88f9\u73fe\u6709\u51fd\u5f0f\u6216\u7a0b\u5f0f\u8a9e\u53e5\u7684\u7269\u4ef6\uff0c\u6240\u4ee5\u628a\u5efa\u69cb\u5f0f\u5916\u9732\u51fa\u4f86\u7d66\u958b\u767c\u8005\u81ea\u884c\u5b9a\u7fa9\u5176\u4e2d\u7684\u7a0b\u5f0f\u78bc\uff0c\u7a31\u4e4b\u70ba"\u66b4\u9732\u7684\u5efa\u69cb\u5f0f\u6a23\u5f0f(Revealing Constructor Pattern)"\u3002'),(0,o.kt)("li",{parentName:"ol"},"\u5c01\u88dd: Promise \u7269\u4ef6\u4e0d\u5916\u9732\u72c0\u614b\uff0c\u4e5f\u7121\u6cd5\u5f9e\u5916\u90e8\u7a0b\u5f0f\u78bc\u4e2d\u76f4\u63a5\u4fee\u6539\u5176\u72c0\u614b\uff0c\u72c0\u614b\u7531 executor \u7684\u57f7\u884c\u7d50\u679c\u6c7a\u5b9a\u3002\u6b64\u5916\uff0cPromise \u7269\u4ef6\u4e00\u65e6\u88ab\u56fa\u5b9a\u4f4f\u5169\u7a2e\u5176\u4e00\u7684\u72c0\u614b\uff0c\u5c31\u7121\u6cd5\u518d\u6539\u8b8a\u72c0\u614b\uff0c\u9019\u4e5f\u662f\u9019\u7a2e\u6a23\u5f0f\u5728\u81f4\u529b\u4fdd\u8b77\u7684\u539f\u5247\u3002"),(0,o.kt)("li",{parentName:"ol"},"Throw safety(\u5b89\u5168\u6027): \u78ba\u4fdd\u5728\u5efa\u69cb\u51fd\u5f0f\u5728\u57f7\u884c\u904e\u7a0b\u6642\uff0c\u5982\u679c\u6709 throw \u4f8b\u5916\u7684\u60c5\u6cc1\u4e5f\u662f\u5b89\u5168\u7684\uff0c\u80fd\u4f5c\u7570\u6b65\u7684\u932f\u8aa4\u8655\u7406\u3002")),(0,o.kt)("h2",{id:"then-\u8207-catch"},"then \u8207 catch"),(0,o.kt)("p",null,"then \u7232\u662f\u8981\u929c\u63a5 promise \u7684\u95dc\u9375\u5b57\uff0c\u53ef\u4ee5\u50b3\u5165 Function \u8655\u7406 resolve \u6216\u662f reject \uff0c\u4e26\u4e14\u53ef\u4ee5\u518d return \u76f8\u540c\u578b\u5225\u7684\u503c\uff0c\u5c07\u503c\u7e7c\u7e8c\u5f80\u4e0b\u50b3\u905e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = new Promise(function (resolve, reject) {\n  resolve(1);\n});\n\npromise\n  .then(function (value) {\n    console.log(value); // 1\n    return value + 1;\n  })\n  .then(function (value) {\n    console.log(value); // 2\n    return value + 2;\n  })\n  .then(function (value) {\n    console.log(value); // 4\n  });\n")),(0,o.kt)("p",null,"\u70ba\u4e86\u65b9\u4fbf\u9032\u884c\u591a\u500b\u4e0d\u540c\u7a0b\u5f0f\u78bc\u7684\u9023\u9396\uff0c\u901a\u5e38\u5728\u53ea\u4f7f\u7528 then \u65b9\u6cd5\u6642\uff0c\u90fd\u53ea\u5beb\u7b2c 1 \u500b\u51fd\u5f0f\u50b3\u5165\u53c3\u6578\uff0c\u4e5f\u5c31\u662f\u53ea\u7528 onFulfilled \u51fd\u5f0f\u9019\u500b\u50b3\u5165\u53c3\u6578\u503c\uff0c\u800c\u932f\u8aa4\u503c\u5247\u662f\u901a\u904e catch \u53bb\u8655\u7406\uff0ccatch \u65b9\u6cd5\u76f8\u7576\u65bc then(undefined, onRejected)\uff0c\u53ef\u4ee5\u7d71\u4e00\u63a5\u6240\u6709 onRejected"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const p1 = new Promise((resolve, reject) => {\n  resolve(4);\n});\n\np1.then((val) => {\n  console.log(val); //4\n  return val + 2;\n})\n  .then((val) => {\n    console.log(val); //6\n    throw new Error("error!");\n  })\n  .catch((err) => {\n    //catch\u7121\u6cd5\u6293\u5230\u4e0a\u500bpromise\u7684\u56de\u50b3\u503c\n    console.log(err.message);\n    //\u9019\u88e1\u5982\u679c\u6709\u56de\u50b3\u503c\uff0c\u4e0b\u4e00\u500bthen\u53ef\u4ee5\u6293\u5f97\u5230\n    //return 100\n  })\n  .then((val) => console.log(val, "done")); //val\u662fundefined\uff0c\u56de\u50b3\u503c\u6d88\u606f\n')),(0,o.kt)("p",null,"\u800c\u6709\u8aaa\u5230\uff0c catch \u4e5f\u662f then \u7684\u4e00\u7a2e\u5beb\u6cd5\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5 return \u503c\u7d66\u4e0b\u4e00\u500b then \u4f7f\u7528\uff0c\u6240\u4ee5\u5728\u67d0\u4e9b\u6642\u5019\uff0c\u53ef\u4ee5\u5148\u900f\u904e catch \u5c07\u932f\u8aa4\u96c6\u4e2d\u5f8c\uff0c\u4f9d\u5e8f\u7528 then \u53bb\u505a\u60f3\u5c0d\u61c9\u7684\u932f\u8aa4\u8655\u7406"),(0,o.kt)("h2",{id:"throw-\u8207-reject"},"throw \u8207 reject"),(0,o.kt)("p",null,"\u5f9e\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528 throw \u53ef\u4ee5\u89f8\u767c promise \u7684 reject function \uff0c\u9019\u4e00\u500b\u60c5\u6cc1\u662f\uff0c\u7576\u4f7f\u7528 throw \uff0c\u6703\u627e\u5230\u6700\u8fd1\u7684 reject (\u6216\u662f catch )\uff0c\u4e26\u4e14\u57f7\u884c\u5b8c\u5f8c\u53ef\u4ee5\u7e7c\u7e8c\u9023\u9396\u4e0b\u53bb"),(0,o.kt)("p",null,"\u800c throw \u8207 reject \u90fd\u6703\u9054\u5230\u76f8\u540c\u6548\u679c\uff0c\u800c\u672c\u8cea\u4e0a\u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\u5462\uff1f"),(0,o.kt)("p",null,"\u4f7f\u7528\u8d77\u4f86\u662f\u4e00\u6a23\u7684\uff0c\u4f46\u672c\u8cea\u4e0a\u662f\u6709\u4e9b\u8a31\u5dee\u7570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 throw \u6bd4\u8f03\u50cf\u8aaa\u7a0b\u5f0f\u767c\u751f\u4ec0\u9ebc\u4f8b\u5916\uff0c\u6240\u4ee5\u4f7f\u7528 throw \uff0c\u800c\u525b\u597d\u5728 promise \u88e1\u9762\u4f7f\u7528 throw \u6703\u5c07\u72c0\u614b\u8f49\u7232\u62d2\u7d55\u7684\u72c0\u614b"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 reject \u6bd4\u8f03\u50cf\u67d0\u4e9b\u72c0\u6cc1\u6211\u60f3\u8981\u4f7f\u7528\u62d2\u7d55\u7684\u72c0\u614b\uff0c\u6240\u4ee5\u4f7f\u7528 reject")),(0,o.kt)("p",null,"\u53ea\u6709\u7576\u4e00\u7a2e\u72c0\u6cc1\u7684\u6642\u5019\uff0c\u4e00\u5b9a\u8981\u4f7f\u7528 reject \uff0c\u5728 Promise \u4e2d(\u5efa\u69cb\u51fd\u5f0f\u6216 then \u4e2d)\u4f7f\u7528\u5176\u4ed6\u7570\u6b65\u56de\u8abf\u7684 API \u6642 \uff0c\u4f7f\u7528 throw \u4e26\u4e0d\u80fd\u89f8\u767c reject \uff0c\u800c\u662f\u76f4\u63a5\u4e1f\u51fa\u4e00\u500b\u932f\u8aa4\uff0c\u5982\u679c\u5e0c\u671b\u662f\u88ab promise reject \u63a5\u4f4f\u7684\u8a71\uff0c\u5c31\u8981\u4f7f\u7528 reject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const p1 = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    // \u9019\u88e1\u5982\u679c\u7528throw\uff0c\u662f\u5b8c\u5168\u4e0d\u6703\u62d2\u7d55promise\n    reject(new Error("error occur!"));\n    //throw new Error(\'error occur!\')\n    // \u4f7f\u7528 throw \u6703\u5728 console \u4e1f\u51fa error occur \u7684\u932f\u8aa4\n  }, 1000);\n});\n\np1.then((val) => {\n  console.log(val);\n  return val + 2;\n})\n  .then((val) => console.log(val))\n  .catch((err) => console.log("error:", err.message))\n  .then((val) => console.log("done"));\n')),(0,o.kt)("p",null,"\u800c\u5728\u4f7f\u7528 Promise \u88e1\u9762\uff0c\u900f\u904e then \u8207 catch \u53ef\u4ee5\u9054\u5230\u4e00\u90e8\u5206\u4e00\u90e8\u5206\u8655\u7406\u7a0b\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'async1()\n  .then(() => async2())\n  .then(() => async3())\n  .catch((err) => errorHandler1())\n  .then(\n    () => async4(),\n    (err) => errorHandler2()\n  )\n  .catch((err) => console.log("Don\'t worry about it"))\n  .then(() => console.log("All done!"));\n')),(0,o.kt)("p",null,"\u800c\u5728\u4f7f\u7528 Promise \u7684\u6642\u5019\uff0c\u8981\u77e5\u9053\u54ea\u4e00\u500b\u6bb5\u6703\u5728\u54ea\u88cf\u57f7\u884c\uff0c\u4ee5\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u7232\u4f8b\uff0c\u6211\u5011\u7fd2\u6163 then \u53ea\u5305\u8655\u7406 fulfilled \u7684 function \uff0c\u6240\u4ee5\u7576 async1 \u50b3\u5165 rejected \u7684\u6642\u5019\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e26\u4e0d\u6703\u57f7\u884c\u5230 async2 \u8ddf async3 \u56e0\u7232\u6c92\u6709 reject \u7684 function"),(0,o.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6703\u88ab catch \u63a5\u5230\uff0c\u4e26\u57f7\u884c errorHandler1\uff0c\u4e26\u4e14\u7576\u518d\u5f80\u4e0b\u50b3\u7684\u6642\u5019\uff0c\u72c0\u614b\u5c31\u6703\u8b8a\u6210 fulfilled"),(0,o.kt)("li",{parentName:"ul"},"\u9019\u6642\u5019\u5c31\u6703\u57f7\u884c async4 \uff0c\u800c\u9019\u6642\u5019\u88ab\u8655\u7406\u904e\u5f8c\u72c0\u614b\u9084\u662f fulfilled"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u6703\u88ab catch \u63a5\u5230\uff0c\u56e0\u7232\u72c0\u614b\u662f fulfilled \uff0c\u6700\u5f8c\u88ab then \u63a5\u5230\uff0c\u5c31\u5370\u51fa All done!")),(0,o.kt)("h2",{id:"then"},"then"),(0,o.kt)("p",null,"then \u5982\u679c\u8981\u5f80\u4e0b\u50b3\u6709\u4e00\u4e9b\u898f\u5247"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c then \u88e1\u9762\u5305\u7684\u4e0d\u662f function \uff0c\u5247\u5ffd\u7565"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c function \u6709 return \uff0c\u6703\u5c07\u503c\u7576\u4f5c\u4e0b\u4e00\u500b then \u7684 value \u50b3\u5165")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function doSomething1() {\n  console.log("doSomething1 start");\n  return new Promise(function (resolve, reject) {\n    console.log("doSomething1 end");\n    resolve(1);\n  });\n}\n\nfunction doSomething2() {\n  console.log("doSomething2");\n  return 2;\n}\n\nfunction finalThing(value) {\n  console.log("finalThing");\n  console.log(value);\n  return 0;\n}\n\n// \u7b2c 1 \u7a2e\u50b3\u5165\u53c3\u6578\n// \u6b63\u5e38\u50b3\u5165 function\ndoSomething1().then(doSomething2).then(finalThing); // 2\n\n// \u7b2c 2 \u7a2e\u50b3\u5165\u53c3\u6578\n// \u56e0\u7232 function \u57f7\u884c\u4e86\uff0c\u8b8a\u6210\u4ed6\u7684 return \u503c 2 \uff0c\u5c31\u6703\u5ffd\u7565\u9019\u4e00\u500b\uff0c\u4e26\u7e7c\u7e8c\u628a\u539f\u672c\u7684 value \u5f80\u4e0b\u50b3\ndoSomething1().then(doSomething2()).then(finalThing); // 1\n\n// \u7b2c 3 \u7a2e\u50b3\u5165\u53c3\u6578\n// function \u57f7\u884c\u5b8c\u5f8c\u5982\u679c\u6c92\u6709\u5beb return \uff0c\u5247\u6703\u9810\u8a2d\u90fd\u662f undefined\n// \u6240\u4ee5\u5c31\u6703\u628a undefined \u7576\u4f5c value \u5f80\u4e0b\u50b3\ndoSomething1()\n  .then(function () {\n    doSomething2();\n  })\n  .then(finalThing); // undefined\n\n// \u7b2c 4 \u7a2e\u50b3\u5165\u53c3\u6578\n// \u6b63\u5e38\u50b3\u5165\u53c3\u6578\uff0c\u4e26\u4e14\u50b3\u51fa function doSomething2 \u57f7\u884c\u5b8c\u7684 2 \uff0c\u6240\u4ee5 value \u662f 2\ndoSomething1()\n  .then(function () {\n    return doSomething2();\n  })\n  .then(finalThing); // 2\n')),(0,o.kt)("h2",{id:"promiseresolve-\u8207-promisereject"},"Promise.resolve \u8207 Promise.reject"),(0,o.kt)("p",null,"\u9019\u5169\u500b\u662f Promise \u7684\u65b9\u6cd5\uff0c\u53ea\u7528\u65bc\u55ae\u7d14\u7684\u50b3\u5165\u7269\u4ef6\u3001\u503c\u6216\u5916\u90e8\u7684 thenable \u7269\u4ef6\uff0c\u8f49\u63db\u70ba Promise \u7269\u4ef6\uff0c\u53ef\u4ee5\u8b93\u503c\u88ab\u4ee5 resolve \u6216\u662f reject \u7684\u5f62\u5f0f\u5f80\u4e0b\u9023\u7d50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'Promise.resolve("Success").then(\n  function (value) {\n    console.log(value); // "Success"\n  },\n  function (value) {\n    // \u4e0d\u6703\u88ab\u547c\u53eb\n  }\n);\n')),(0,o.kt)("h2",{id:"promiseall-\u8207-promiserace"},"Promise.all \u8207 Promise.race"),(0,o.kt)("p",null,"\u5169\u8005\u90fd\u53ef\u4ee5\u50b3\u5165\u4e00\u500b iterable \uff0c\u53ef\u4ee5\u50b3\u5165\u985e\u9663\u5217\u7576\u53c3\u6578\uff0c\u901a\u5e38\u90fd\u56de\u50b3\u5165 array"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise.all",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9663\u5217\u4e2d\u7684\u7d22\u5f15\u503c\u8207\u57f7\u884c\u9806\u5e8f\u7121\u95dc"),(0,o.kt)("li",{parentName:"ul"},"\u9663\u5217\u4e2d\u7684\u503c\u5982\u679c\u4e0d\u662f Promise \u7269\u4ef6\uff0c\u6703\u81ea\u52d5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"Promise.resolve"),"\u65b9\u6cd5\u4f86\u8f49\u63db"),(0,o.kt)("li",{parentName:"ul"},'\u57f7\u884c\u904e\u7a0b\u4e2d\u53ea\u8981\u6709"',(0,o.kt)("strong",{parentName:"li"},"\u5176\u4e2d\u4e00\u500b(any)"),'"\u9663\u5217\u4e2d\u7684 Promise \u7269\u4ef6\u57f7\u884c\u767c\u751f\u932f\u8aa4\u4f8b\u5916\uff0c\u6216\u662f\u6709 Promise \u7684 reject \u60c5\u6cc1\uff0c\u6703\u7acb\u5373\u56de\u50b3\u4e00\u500b rejected \u72c0\u614b promise \u7269\u4ef6'),(0,o.kt)("li",{parentName:"ul"},"\u5be6\u73fe\u5b8c\u6210\u5f8c\uff0c\u63a5\u4e0b\u4f86\u7684 then \u65b9\u6cd5\u6703\u7372\u53d6\u5230\u7684\u503c\u662f\u9663\u5217\u503c")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const p1 = Promise.resolve(3);\nconst p2 = 1337;\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("foo"), 1000);\n});\n\nPromise.all([p1, p2, p3])\n  .then((value) => {\n    console.log(value);\n  })\n  .catch((err) => {\n    console.log(err.message);\n  });\n\n//\u7d50\u679c: [3, 1337, "foo"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise.race",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"\u4efb\u4f55\u4e00\u500b"\u9663\u5217\u50b3\u5165\u53c3\u6578\u7684 Promise \u7269\u4ef6\u6709\u89e3\u6c7a\uff0c\u5c31\u6703\u5f80\u4e0b\u50b3'),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u6642\u89e3\u6c7a\uff0c\u4f9d\u7167\u9663\u5217\u7684\u9806\u5e8f\u6c7a\u5b9a\u50b3\u5165\u8ab0(\u524d\u9762\u7684\u5148\u50b3\u5165)")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const p1 = Promise.resolve(3);\nconst p2 = 1337;\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("foo"), 1000);\n});\n\nPromise.race([p1, p2, p3])\n  .then((value) => {\n    console.log(value);\n  })\n  .catch((err) => {\n    console.log(err.message);\n  });\n\n//\u7d50\u679c: 3\n')))}m.isMDXComponent=!0}}]);