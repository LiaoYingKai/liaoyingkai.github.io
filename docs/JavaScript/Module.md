# 模組系統

> 用於組織與管理程式碼的方式

在 JavaScript 裡面，並沒有真正所謂的私有、公開，所以要透過一些方式實作模組，讓程式碼達到區隔或共用

在最早期的方式，是使用 script 的方式做到模組化

```jsx
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Backbone.js Todos</title>
        <link rel="stylesheet" href="todos.css"/>
    </head>

    <body>
        <script src="../../test/vendor/json2.js"></script>
        <script src="../../test/vendor/jquery.js"></script>
        <script src="../../test/vendor/underscore.js"></script>
        <script src="../../backbone.js"></script>
        <script src="../backbone.localStorage.js"></script>
        <script src="todos.js"></script>
    </body>

    <!-- (...) -->

</html>
```

但問題非常明顯，個別檔案不能引入個別檔案內的東西，因爲這種方式是將會共用的變數放在 windows 底下，不僅會污染全域，也是跟其他檔案共同操作一個變數

之後開始使用 module pattern ，使用 IIFE 的特性，將變數與方法鎖在作用域裡面，只能透過特定的方式取得裡面的值

```jsx
// The module pattern
var feature = (function () {
  // Private variables and functions
  var privateThing = "secret";
  var publicThing = "not secret";

  var changePrivateThing = function () {
    privateThing = "super secret";
  };

  var sayPrivateThing = function () {
    console.log(privateThing);
    changePrivateThing();
  };

  // Public API
  return {
    publicThing: publicThing,
    sayPrivateThing: sayPrivateThing,
  };
})();

feature.publicThing; // "not secret"

// Logs "secret" and changes the value of privateThing
feature.sayPrivateThing();
```

然而這樣的方式雖然達到了模組化程式碼，但也還是有幾個問題

- 沒辦法在程式中作模組載入
- 模組之間的相依性不易管理
- 異步載入模組
- 除錯與測試都不容易
- 在大型專案中不易管理

所以近期就發展出了兩套的模組系統：CommonJS Modules / Asynchronous Module Definition (AMD)，而 ES6 整合了兩種的優缺點，實作出原生的模組系統：

### 推薦閱讀： [JavaScript 模組化七日談](http://huangxuan.me/js-module-7day/#/1)

## ES6

- ES6 的模組程式碼會自動變成 strict-mode(嚴格模式)，不論你有沒有使用"use strict"在程式碼中。
- ES6 的模組是一個檔案一個模組
- ES6 模組使用 export(輸出)與 import(輸入)語句來進行模組輸出與輸入。輸出通常位於檔案最後，輸入位於最前面。

基本上模組的使用方式，就是將需要給其他程式碼使用的部分 export 出去，需要使用的檔案 import 進來就可以，而不同的 export 方式也會對應不同的 import 方式

### 單個檔案輸入/輸出

輸出

```jsx
function aFunction(param){
  return param * param
}

export default aFunction
// or
export default aFunction(param){
  return param * param
}
```

輸入

```jsx
import aFunction from "./lib2.js";

console.log(aFunction(5));
// 也可以自定義名稱
import square from "./lib2.js";

console.log(square(5));
```

### 多個檔案輸入/輸出

輸出

```jsx
export const aString = "test";

export function aFunction() {
  console.log("function test");
}

export const aObject = { a: 1 };

export class aClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

輸入

```jsx
// 用花括號，取對應的 module
import { aString, aObject, aFunction, aClass } from "./lib.js";

console.log(aString);
console.log(aObject);

// 也可以在取 module 的時候重新命名
import { aString as newString } from "./lib.js";

console.log(newString);

// or 使用萬用字元(*)再加上一個模組名稱
import * as myModule from "./lib.js";

console.log(myModule.aString);
console.log(myModule.aObject);
```
