---
sidebar_position: 2
---

### this 的五種情況

- 一般的函式呼叫(Function Invocation Pattern)

  - 沒有人呼叫，最後由全域呼叫， this 指向 windows (嚴格模式下爲 undefined)

    ![https://i.imgur.com/CfRiIbb.png](https://i.imgur.com/CfRiIbb.png)

- 物件中的方法呼叫(Method Invocation Pattern)

  - 物件內的 this ，並由物件呼叫，this 指向物件

    ![https://i.imgur.com/XTIbfAD.png](https://i.imgur.com/XTIbfAD.png)

- 建構函式呼叫(Constructor Invocation Pattern)

  - 建構式產生的， this 指向 new 出來的物件

    ![https://i.imgur.com/hbcU9Vf.png](https://i.imgur.com/hbcU9Vf.png)

- 使用 apply, call, bind 方法呼叫(Apply invocation pattern 或 Indirect Invocation Pattern)

  - call/apply/bind 呼叫， this 指向綁定的物件

    ![https://i.imgur.com/qaATr0e.png](https://i.imgur.com/qaATr0e.png)

- 使用箭號函式呼叫

  - 箭號函式沒有自己的 this ，所以他的 this 是指向他所存在的作用域的 this

    ![https://i.imgur.com/tPBZzA5.png](https://i.imgur.com/tPBZzA5.png)

### call

```jsx
function func(param1) {
  console.log("func", this);
}

const objA = {
  methodA() {
    console.log("objA methodA", this);
  },
};

const objB = { a: 1, b: 2 };

func.call(objB); //func Object {a: 1, b: 2}
objA.methodA.call(objB); //objA methodA Object {a: 1, b: 2}
```

### apply

### bind

```jsx
function funcA(param1, param2) {
  console.log(this, param1, param2);
}

const objB = { a: 1, b: 2 };

funcA(); //undefined undefined undefined

const funcB = funcA.bind(objB, objB.a);

funcB(); //Object {a: 1, b: 2} 1 undefined
funcB(objB.b); //Object {a: 1, b: 2} 1 2
```
