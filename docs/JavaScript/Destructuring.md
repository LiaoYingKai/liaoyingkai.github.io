# 解構賦值(destructuring)

> 用於提取(extract)陣列或物件中的資料，如同"鏡子"一般，對映出陣列或物件字面的結構，可以讓程式碼在撰寫時更為簡短與提高閱讀性。

會有幾種常見的狀況

- 從陣列解構賦值
- 從物件解構賦值(或是從混用物件或陣列)
- 非物件或非陣列解構賦值
- 解構賦值時給定預設值
- 搭配函式的傳入參數使用

## 從陣列解構賦值(Array destructuring)

左邊按照你寫的變數或常數樣式，然後在右邊寫上要對映數值，就像"鏡子"般的對應。當沒有對應的值時，就會得到 undefined

```jsx
//基本用法
const [a, b] = [1, 2]; //a=1, b=2

//先宣告後指定值，要用let才行
let a, b;
[a, b] = [1, 2];

// 略過某些值
const [a, , b] = [1, 2, 3]; // a=1, b=3

// 其餘運算
const [a, ...b] = [1, 2, 3]; //a=1, b=[2,3]

// 失敗保護
const [, , , a, b] = [1, 2, 3]; // a=undefined, b=undefined

// 交換值
const a = 1,
  b = 2;
[b, a] = [a, b]; //a=2, b=1

// 多維複雜陣列
const [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];

// 字串
const str = "hello";
const [a, b, c, d, e] = str;
```

## 從物件解構賦值(Object destructuring)

跟 array 一樣，object 的 key 值也要對應到才能賦值

```jsx
// 基本用法
const { user: x } = { user: 5 }; // x=5

// 失敗保護(Fail-safe)
const { user: x } = { user2: 5 }; //x=undefined

// 賦予新的變數名稱
const { prop: x, prop2: y } = { prop: 5, prop2: 10 }; // x=5, y=10

// 屬性賦值語法
const { prop: prop, prop2: prop2 } = { prop: 5, prop2: 10 }; //prop = 5, prop2=10

// 相當於上一行的簡短語法(Short-hand syntax)
const { prop, prop2 } = { prop: 5, prop2: 10 }; //prop = 5, prop2=10

// ES7+的物件屬性其餘運算符
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 }; //a=1, b=2, rest={c:3, d:4}
```

而下面這一個範例會錯，因爲 JS 裡面， 花括號表示物件的宣告符號，但同時也表示程式碼的區塊(block)，所以在沒有 var let const 的情況下，會被當作 block 使用，就不能正常賦值

```jsx
// 錯誤
let a, b
{ a, b } = {a: 1, b: 2}
// 正確
{{ a, b } = {a: 1, b: 2}}
```

也能做陣列物件混合的賦值結構，只要對應的位置有對應的值就可以

```jsx
const {
  prop: x,
  prop2: {
    prop2: {
      nested: [, , b],
    },
  },
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"] } } };
console.log(x, b); // => Hello c
```

## 從非陣列或非物件解構賦值

因爲只有物件是類陣列，只有在使用陣列的情況下可以正常使用，在其他情況下，就會報錯或是 undefined

```jsx
const [a] = undefined;
const { b } = null;
//TypeError: Invalid attempt to destructure non-iterable instanceconst {a} = false

const { a } = false;
const { b } = 10;
const { c } = "hello";

console.log(a, b, c); // undefined undefined undefined

const [a] = false;
const [b] = 10;
const [c] = "hello"; //c="h"

console.log(a, b, c);
```

## 解構賦值時的預設值

```jsx
const [missing = true] = [];
console.log(missing);
// true

const { message: msg = "Something went wrong" } = {};
console.log(msg);
// Something went wrong

const { x = 3 } = {};
console.log(x);
// 3
```

而在字串的使用上要多注意一些

```jsx
const { a = "hello" } = "hello";
const [b = "hello"] = "hello";

console.log(a, b); // hello h
```

## 在函式傳入參數定義中使用

```jsx
function func({ a, b }) {
  return a + b;
}

func({ a: 1, b: 2 }); // 3
```

給定預設值

```jsx
function func({ a = 3, b }) {
  return a + b;
}

func({ a: 1, b: 2 }); // 3
func({ b: 2 }); // 5
func({ a: 1 }); // NaN
func({}); // NaN
func(); // Cannot read property 'a' of undefined
```

如果不想出現 NaN ，就把 a, b 都給定預設值

```jsx
function func({ a = 3, b = 5 }) {
  return a + b;
}

func({ a: 1 }); // 6
func({}); // 8
func(); // Cannot read property 'a' of undefined
```

如果不想有 從 undefined 取值的錯，可以給參數一個空物件或是給定預設值

```jsx
function func({ a = 3, b = 5 } = {}) {
  return a + b;
}

func({}); // 8
func(); // 8

function func({ a = 3, b = 5 } = { a: 7, b: 11 }) {
  return a + b;
}

func({}); // 8
func(); // 18
```

### 而這邊比較，當傳入 null 或是 void 0( undefined ) 的差別

```jsx
function func({ a = 1, b = 2 } = { a: 1, b: 2 }) {
  return a + b;
}

func({ a: null }); // 2
func({ a: void 0 }); // 3
func({}); // 3
func(); // 3

function g(a = 1, b = 2) {
  return a + b;
}

g(5); // 7
g(void 0, 5); // 6
g(null, 5); // 5
g(); // 3
```

使用 Null 的情況下，會認定是有傳值的，但是是將值指定成 null (做運算預設爲 0 )

而使用 void 0，則是會認定爲 undefined ，所以就會使用預設值
