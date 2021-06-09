---
sidebar_position: 2
---

# 原型基礎物件導向

### 原型鏈

- 每一個 `函式` 都會有 `prototype` 屬性

  - `函式` 內的 `prototype` 會指向對應的物件

    ![https://i.imgur.com/ElzpAhK.png](https://i.imgur.com/ElzpAhK.png)

  - `protorype` 內的 `contructor` 會指回這個`函式`

    ![https://i.imgur.com/fgTMOBc.png](https://i.imgur.com/fgTMOBc.png)

- 每一個 `物件` 都會有 `__proto__` 內部屬性

  - `__proto__` 會指向繼承而來的 `prototype` 物件

    ![https://i.imgur.com/PcfdUL5.png](https://i.imgur.com/PcfdUL5.png)

  - 由 `__proto__` 連接起來的結構，稱之爲 `prototype chain`，所以可以透過 `__proto__` 一路往上找相關的父層，直到找到 `Object.__proto__`

    ![https://i.imgur.com/aWGt7nk.png](https://i.imgur.com/aWGt7nk.png)

  - `物件` 不是 `函式` ，沒有 `prototype` 的屬性

    ![https://i.imgur.com/z5wMkue.png](https://i.imgur.com/z5wMkue.png)

### 原型鏈是讓 JS 達到`繼承效果`的方式

- 繼承可以分爲

  - 原型為基礎的繼承(Prototype-based inheritance)
    可以透過 `.prototype` 彈性的擴充屬性與方法，並且共享在所有繼承於他的物件

    ![https://i.imgur.com/4JOk4Xr.png](https://i.imgur.com/4JOk4Xr.png)

  - 類別的繼承(Classical inheritance)

    - ES6 之前

      ![https://i.imgur.com/qF1dg64.png](https://i.imgur.com/qF1dg64.png)

    - ES6

      ![https://i.imgur.com/UeoFEm9.png](https://i.imgur.com/UeoFEm9.png)

- js 沒有 public / private 的設計理念，只能由開發者自己維護， ex： 在 function 前面加上底線符號`(_)`前綴字

### 判斷某個建構式是否存在於原型鏈上

![https://i.imgur.com/pSsSfHz.png](https://i.imgur.com/pSsSfHz.png)

- constructor
  只會顯示上一層的建構式
- instanceof
  會遍歷整個原型鏈，並回傳 bool 值 - instanceof 不適合用在基本型別的判斷與由 iframe 所產生的物件

- 判斷某個屬性是否存在於某個物件中
  - hasOwnProperty
    只會在這個物件中找
  - in / for...in
    遍歷整個原型鏈
- 準確的判斷物件

  - 鴨子類型(Duck typing)
    `當看到一隻鳥走起來像鴨子、游泳起來像鴨子、叫起來也像鴨子，那麼這隻鳥就可以被稱為鴨子。`

  ```jsx
  function isPlayer(object) {
    return (
      object != null &&
      typeof object === "object" &&
      "name" in object &&
      "age" in object &&
      "toString" in object
    );
  }
  ```

### 建立物件的三種方式

```jsx
//物件字面定義，相等於new Object()
const newObject = {};

//使用Object.create方法
const newObject = Object.create(proto);

//ES6類別定義，或是建構函式。通常稱為建構式樣式。
const newObject = new ConstructorFunc();
const newObject = new ClassName();
```

，除了必要一定要用 new 的情況，都要視應用到情況而定

```
new Date()
new XMLHttpRequest()
new Error
```
