### 撰寫風格

- 延續傳遞風格 (Continuation-passing style, CPS)
  可以傳入參數，目的是在程式內移交控制權，不使用函式回傳值

```jsx
function func(x, callback) {
  callback(x);
}
```

- 直接風格 (Direct style)
  使用函式回傳值，結束後的下一行才會再呼叫其他函式

```jsx
const x = function func(x) {
  return x;
};

callback(x);
```

而 JS 大量使用 CPS 風格有幾個原因：

1. 一開始就是以 CPS 風格來設計事件非同步處理的模型，用於配合非同步回調函式的執行使用

- JS 具有頭等函式的特性

  高階函式(High Order Function)： 可以將 function 當參數傳入，也可以將 fucntion 當回傳值傳出

### 非同步回調函式

不是所有的 callback 非同步(ex. Array.forEach)，而是 callback 剛好可以解決非同步的問題，讓非同步可以有可預測性的執行流程

- 讓使用者可以模擬非同步的方式
  - 使用計時器(timer)函式: setTimeout, setInterval
  - 特殊的函式: nextTick, setImmediate
  - 執行 I/O: 監聽網路、資料庫查詢或讀寫外部資源
  - 訂閱事件

簡單的例子

```jsx
function aFunc(value, callback) {
  callback(value);
}

function bFunc(value, callback) {
  setTimeout(callback, 0, value);
}

function cb1(value) {
  console.log(value);
}
function cb2(value) {
  console.log(value);
}
function cb3(value) {
  console.log(value);
}
function cb4(value) {
  console.log(value);
}

aFunc(1, cb1);
bFunc(2, cb2);
aFunc(3, cb3);
bFunc(4, cb4);
```

結果爲 1 => 3 => 2 => 4
因爲 2 跟 4 爲非同步的狀態 ，所以會等同步的執行完後，才會執行非同步的事件

流程爲
執行 -> 遇到非同步 -> 將非同步 Function 丟到背景 -> 繼續執行同步的 Function -> 同步都執行完了 -> 將已經在佇列的非同步 Function 依序拉到主執行序處理

非同步的執行順序爲放入佇列的順序，不是執行非同步 Function 的順序

### `匿名函式`、`函式定義`與`函式呼叫`的混合

由於 js 可以將函式當參數傳入，所以也可以在參數的地方做 function 的定義

範例程式

```jsx
function func(x, cb) {
  cb(x);
}

func(123456, function (value) {
  console.log(value);
});
```

### 這邊有幾個要注意的部分

`呼叫`了 func 這個 function

```jsx
func(123456, function (value) {
  console.log(value);
});
```

並在裡面做了`函式的定義`，而且是`匿名函式`的定義

```jsx
function(value){
  console.log(value)
}
```

而匿名函式在 func 裡面被`呼叫`了

```jsx
function func(x, cb) {
  cb(x);
}
```

### callback hell

```jsx
step1(x, function (value1) {
  //do something...
  step2(y, function (value2) {
    //do something...
    step3(z, function (value3) {
      //do something...
    });
  });
});
```

step1 -> function(value1) -> step2 -> function(value2) -> step3 -> function(value3)

但不是說使用了 callback 就不會造成阻塞，也有可能從佇列回到主緒行緒後，因為需要 CPU 密集型的運算，仍然會阻塞到緒行緒的進行。
異步回調函式，只是暫時先移到佇列中放著，讓它先不干擾目前的主執行緒的執行而已。這是 JavaScript 為了在只有單執行緒的情況，用來達成並行(concurrency)模型的設計方式。

而在 node.js 裡面，採用了 error-first (以錯誤為主) 的 CPS

```jsx
fs.readFile("foo.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Unknown Error");
    return;
  }
  console.log(data);
});
```

先處理錯誤，如果沒有錯誤才會處理到正常流程的 callback
