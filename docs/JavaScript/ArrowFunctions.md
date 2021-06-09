# 箭號函式 Arrow Functions

### Arrow Function 的特色

Arrow Functions 有幾個好處

- 語法簡單，少打很多字元。
- 可以讓程式碼的可閱讀性提高。
- 某些情況下可以綁定 `this` 值

```jsx
// ES5
const func = function (x) {
  return x + 1;
};
// Arrow function
const func = (x) => x + 1;
```

Arrow 有幾個要注意的地方：

```jsx
// 如果只有傳一個參數，可以省略括號
const func = (x) => x + 1;
// 如果沒有參數或是兩個以上的參數，要加入括號
const func = () => {
  console.log("test");
};
const func = (x, y) => x + y;
// 如果有回傳值且回傳值可以可以一行寫完的話，可以省略花括號
const func = (x) => x + 1;
// 如果超過一行，就要使用花括號
const func = (x, y) => {
  for (let i = x; i < y; i++) {
    console.log(i);
  }
};
```

### 綁定 this

Arrow function 沒有自己的 this，所以他會綁定他所在區域的 this 指向誰(不是看自己本身)

```jsx
const Kai = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};
Kai.a(); // {a: ƒ, b: ƒ}
Kai.b(); // Window
```

由於 a function 是被 kai 呼叫的，所以 this 是指向 kai

而 b function 也是被 kai 呼叫，但 b 是使用 arrow function ，所以他要看他所在區域(也就是 kai) 的 this 指向誰，而 kai 的 this 指向了 window，所以 b function 就會指向 window

所以可以用在一些常見 this 會跑掉的地方：

```jsx
// 爲了不讓 this 跑掉，所以用 that 先將 this 保存並傳入 setTimeout 裡面
const obj = { a: 1 };

function func() {
  const that = this;

  setTimeout(function () {
    console.log(that);
  }, 2000);
}

func.call(obj); //Object {a: 1}

// 因爲使用箭號函式，所以 this 就會指向使用他的人的所在區域的 this
const obj = { a: 1 };

function func() {
  setTimeout(() => {
    console.log(this);
  }, 2000);
}

func.call(obj); //Object {a: 1}
```

## 不可使用箭頭函式的情況

箭號函式當然會有不能使用的地方，因爲不一樣綁定 this 的方式，在某些時候反而會有反效果

### 使用字面文字定義物件時，其中的方法

箭頭函式會以定義當下的`this`值為`this`值，也就是 window 物件(或是在嚴格模式的 undefined)，所以是存取不到物件中的`this.array`值的，

```jsx
const calculate = {
  array: [1, 2, 3],
  sum: () => {
    return this.array.reduce((result, item) => result + item);
  },
};

//TypeError: Cannot read property 'array' of undefined
calculate.sum();
```

### **物件的 prototype 屬性中定義方法時**

這種情況也是像上面的類似，箭頭函式的`this`值，也就是 window 物件(或是在嚴格模式的 undefined)。

```jsx
function MyCat(name) {
  this.catName = name;
}

MyCat.prototype.sayCatName = () => {
  return this.catName;
};

cat = new MyCat("Mew");
// ReferenceError: cat is not defined
cat.sayCatName();
```

### DOM 事件處理的監聽者(事件處理函式)

這一邊的 this 會指向 dom 元素，但如果使用箭號函式，會指向全域的 window

```jsx
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  this.innerHTML = "Clicked button";
});
//TypeError: Cannot set property 'innerHTML' of undefined
```

### **建構函式**

這會直接在用`new`運算符時拋出例外

```jsx
const Message = (text) => {
  this.text = text;
};
// Throws "TypeError: Message is not a constructor"
const helloMessage = new Message("Hello World!");
```

## **其他限制或陷阱**

- 函式物件中的`call`、`apply`、`bind`三個方法，無法"覆蓋"箭頭函式中的`this`值。
- 箭頭函式沒有一般函式有的隱藏 arguments 物件。
- 箭頭函式不能當作 generators 使用，使用`yield`會產生錯誤。
- 箭頭函式用於解決一般的`this`問題是可以，但並不適用於全部的情況，尤其是在像 jQuery、underscore 之類有 callback(回調)之類的 API 時，有可能不是如預期般的結果。(因爲像 jQuery 有改變 this 綁定的對象)
