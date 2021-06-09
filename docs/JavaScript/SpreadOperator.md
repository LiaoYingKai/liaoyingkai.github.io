# 展開運算符與其餘運算符

- 符號爲三個點 ...
- 與陣列有關
- 可用於展開陣列中的值，也可以集合其餘的值爲陣列

## 展開運算符(Spread Operator)

> 展開運算符是把一個陣列展開成個別的值的速寫語法，它只會在陣列字面定義與函式呼叫時使用

使用方式：

與 Array 的 concat 類似

```jsx
const params = ["hello", true, 7];
const spreadOperatorArray = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
const concatArray = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
```

可以當作 array 的淺拷貝

```jsx
const arr = [1, 2, 3];
const arr2 = [...arr];

arr2.push(4); // arr [1, 2, 3] arr2 [1, 2, 3, 4] ，不會影響到原來的 array
```

也可以將陣列展開的的丟入 function ，與 apply 類似

```jsx
function sum(a, b, c) {
  return a + b + c;
}

var args = [1, 2, 3];
sum.apply(undefined, args); // 6
sum(...args); // 6
```

可以把可迭代(iterable)或與陣列相似(Array-like)的物件轉變為陣列

可迭代： String、Array、TypedArray、Map 與 Set

```jsx
const aString = "foo";
const chars = [...aString]; // [ "f", "o", "o" ]
```

類陣列: arguments

```jsx
function aFunc(x) {
  console.log(arguments); // Arguments(1) [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(Array.isArray(arguments)); // false

  //轉為真正的陣列
  const arr = [...arguments];
  console.log(arr); // [1]
  console.log(Array.isArray(arr)); // true
}

aFunc(1);
```

## 其餘運算符(Rest Operator)

使用情境：

- 函式定義中的傳入參數定義中
- 解構賦值

### 其餘參數(Rest parameters)

可以將不確定參數數量轉成 array ，再做運算

```jsx
function sum(…numbers) {
  const result = 0

  numbers.forEach(function (number) {
    result += number
  })

  return result
}

sum(1) // 1
sum(1, 2, 3, 4, 5) // 15
```

> 特別注意: 其餘參數在傳入參數定義中，必定是位於最後一位，並且在參數中只能有一個其餘參數。

在沒有傳入實際值時，會是一個空陣列，不是 undefined

```jsx
function aFunc(x, ...y) {
  console.log("x =", x, ", y = ", y);
}

aFunc(1, 2, 3); //x = 1, y = [2, 3]
aFunc(); //x = undefined, y = []
```

可以取代函式中隱藏的僞陣列

```jsx
function aFunc(x) {
  console.log(arguments); // Arguments(1) [1 ,2 ,3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(Array.isArray(arguments)); // false

  //轉為真正的陣列
  const arr = [...arguments];
  console.log(arr); // [1, 2, 3]
  console.log(Array.isArray(arr)); // true
}

aFunc(1, 2, 3);
```

### [解構賦值(destructuring)](https://www.notion.so/destructuring-7ca3e29a77da4c64b98c25ad41957f95)

> 解構賦值是用在"陣列指定陣列"或是"物件指定物件"的情況下，這個時候會根據陣列原本的結構，以類似"鏡子"對映樣式(pattern)來進行賦值

```jsx
// Array
const [x, y, z] = [1, 2, 3];

console.log(x); //1

const [x, ...y] = [1, 2, 3];

console.log(x); //1
console.log(y); //[2,3]

// Object
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread Properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
```

```jsx
// Array
const [x, y, z] = [1, 2, 3];

console.log(x); //1

const [x, ...y] = [1, 2, 3];

console.log(x); //1
console.log(y); //[2,3]

// Object
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread Properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
```
