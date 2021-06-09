---
sidebar_position: 3
---

- JS 的 Function 有幾個特性
  - Function 屬於 first-class-function (頭等函式)
    - 可以被當參數傳入
    - 也可以被當參數傳出
  - typeof 一個 Function 回傳值是 Function

### 閉包的簡單定義

記住 Function 被建立時當下環境

```jsx
function aFunc(x) {
  return function bFunc() {
    console.log(x++);
  };
}

const newFunc = aFunc(1);
newFunc(); // 1
newFunc(); // 2
```

在第一次建立的時候，將 x 定義爲 1 ，而 x 的值就被保留在 aFunc 裡面，所以當 x++ 的時候，都是同一個 x 被做運算的 ( 這邊先不討論 ++ 放前面還是放後面的 side effect )

這邊有幾個要注意的地方

- aFunc 呼叫後， newFunc 才會建立 並產生閉包
- 不是只有回傳 Function 才會產生閉包，所有 Function 在建立時都會產生閉包

可以透過瀏覽器的開發工具，去看到有明確產生一個閉包，可以透過這個方式，去瞭解閉包產生當下的環境變數值

![](https://i.imgur.com/UeQPyca.png)

```jsx
const varGlobal = "x";

function outer(paramOuter) {
  const varOuter = "y";

  function inner(paramInner) {
    const varInner = "z";

    //print
    console.log(varGlobal);
    console.log(varOuter);
    console.log(varInner);
    console.log(paramOuter);
    console.log(paramInner);
  }

  return inner;
}

const func = outer("a");
func("b");
```

這一個範例可以讓我們瞭解到，在 func 這一個閉包建立的時候，已經將全域的變數、區域的變數儲存在自己的作用域裡面，而爲什麼可以這樣做呢：

- Function 在 JavaScript 中的設計：Function 可以像一般的數值使用，可以在變數、物件或陣列中儲存，也可以傳入到另外的 Function 裡當參數，也可以當回傳值回傳。
- Function 作用域連鎖規則：內部 Function 可以看到(或存取得到)外部 Function ，而形成一個 Scope Chain(作用域連鎖)，內部 Function 可以有三個作用域：
  - 自已本身的
  - 外部 Function 的
  - 全域的

### 閉包的應用範圍

#### 柯里化(Currying)與部份應用(Partial application)

- 柯里化： 一個具有多個傳入參數的 Function ，轉變為一個一次只傳入一個參數，只會回傳一個只有一個傳入參數的 Function
- 部分應用： 代表一個 Function 其中有部份的傳入值(一個或多個)被傳入，然後回傳一個已經有部份傳入值的 Function

這個是 部份求值 或 惰性(延時)求值 的一種技巧

```jsx
function add(x, y, z) {
  return x + y + z;
}

// 部分應用
function add(x, y, z) {
  return function (z) {
    return x + y + z;
  };
}

const addXY = add(1, 2);
addXY(3);
// 柯里化
function add(x, y, z) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
add(1)(2)(3);
```

#### 模組化：

可以只有讓 module 使用私有的方法

```jsx
var Module = (function() {
    // 以下的方法是私有的，但是可以被公開的Function 存取
    function privateFunc() { ... }

      // 回傳要指定給模組的物件
    return {
        publicFunc: function() {
            privateFunc() // publicFunc 可以直接存取 privateFunc
        }
    }
}())
```
