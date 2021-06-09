# Promise

## 專門用語

- `promise` (承諾)是一個帶有遵照這個規格的 then 方法的物件
- `thenable`  是一個有定義 then 方法的物件
- `value`  合法的 JavaScript 值(包含 undefined、thenable 與 promise)
- `exception` (例外)使用 throw 語句丟出來的值
- `reason` (理由)是表明為什麼 promise 被拒絕(rejected)的值

## 狀態

- Pending: 等待中，可能轉變成 fulfilled 或是 rejected
- Fulfilled: 已實現，不能再轉變成其他狀態
- Rejected: 已拒絕，不能再轉變成其他狀態

## 基本使用

透過 new Promise 建構出一個 promise 物件，傳入兩個 callback ，一個處理當有正確值的時候，一個處理拒絕的時候

```jsx
const promise = new Promise(function (resolve, reject) {
  // 成功時
  resolve(value);
  // 失敗時
  reject(reason);
});

promise.then(
  function (value) {
    // on fulfillment(已實現時)
  },
  function (reason) {
    // on rejection(已拒絕時)
  }
);
```

而 Promise 通常建立時就要決定要執行 resolve 還是 reject 了，所以會再用一個 Function 包起來

```jsx
function asyncFunction(value) {
  return new Promise(function (resolve, reject) {
    if (value) resolve(value);
    // 已實現，成功
    else reject(reason); // 有錯誤，已拒絕，失敗
  });
}
```

而使用這樣的建構方式，有幾個原因

1. 暴露的建構式樣式: Promise 只是個用來包裹現有函式或程式語句的物件，所以把建構式外露出來給開發者自行定義其中的程式碼，稱之為"暴露的建構式樣式(Revealing Constructor Pattern)"。
2. 封裝: Promise 物件不外露狀態，也無法從外部程式碼中直接修改其狀態，狀態由 executor 的執行結果決定。此外，Promise 物件一旦被固定住兩種其一的狀態，就無法再改變狀態，這也是這種樣式在致力保護的原則。
3. Throw safety(安全性): 確保在建構函式在執行過程時，如果有 throw 例外的情況也是安全的，能作異步的錯誤處理。

## then 與 catch

then 爲是要銜接 promise 的關鍵字，可以傳入 Function 處理 resolve 或是 reject ，並且可以再 return 相同型別的值，將值繼續往下傳遞

```jsx
const promise = new Promise(function (resolve, reject) {
  resolve(1);
});

promise
  .then(function (value) {
    console.log(value); // 1
    return value + 1;
  })
  .then(function (value) {
    console.log(value); // 2
    return value + 2;
  })
  .then(function (value) {
    console.log(value); // 4
  });
```

為了方便進行多個不同程式碼的連鎖，通常在只使用 then 方法時，都只寫第 1 個函式傳入參數，也就是只用 onFulfilled 函式這個傳入參數值，而錯誤值則是通過 catch 去處理，catch 方法相當於 then(undefined, onRejected)，可以統一接所有 onRejected

```jsx
const p1 = new Promise((resolve, reject) => {
  resolve(4);
});

p1.then((val) => {
  console.log(val); //4
  return val + 2;
})
  .then((val) => {
    console.log(val); //6
    throw new Error("error!");
  })
  .catch((err) => {
    //catch無法抓到上個promise的回傳值
    console.log(err.message);
    //這裡如果有回傳值，下一個then可以抓得到
    //return 100
  })
  .then((val) => console.log(val, "done")); //val是undefined，回傳值消息
```

而有說到， catch 也是 then 的一種寫法，所以也可以 return 值給下一個 then 使用，所以在某些時候，可以先透過 catch 將錯誤集中後，依序用 then 去做想對應的錯誤處理

## throw 與 reject

從上面的例子可以看到，使用 throw 可以觸發 promise 的 reject function ，這一個情況是，當使用 throw ，會找到最近的 reject (或是 catch )，並且執行完後可以繼續連鎖下去

而 throw 與 reject 都會達到相同效果，而本質上有什麼不一樣呢？

使用起來是一樣的，但本質上是有些許差異

- 使用 throw 比較像說程式發生什麼例外，所以使用 throw ，而剛好在 promise 裡面使用 throw 會將狀態轉爲拒絕的狀態
- 使用 reject 比較像某些狀況我想要使用拒絕的狀態，所以使用 reject

只有當一種狀況的時候，一定要使用 reject ，在 Promise 中(建構函式或 then 中)使用其他異步回調的 API 時 ，使用 throw 並不能觸發 reject ，而是直接丟出一個錯誤，如果希望是被 promise reject 接住的話，就要使用 reject

```jsx
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // 這裡如果用throw，是完全不會拒絕promise
    reject(new Error("error occur!"));
    //throw new Error('error occur!')
    // 使用 throw 會在 console 丟出 error occur 的錯誤
  }, 1000);
});

p1.then((val) => {
  console.log(val);
  return val + 2;
})
  .then((val) => console.log(val))
  .catch((err) => console.log("error:", err.message))
  .then((val) => console.log("done"));
```

而在使用 Promise 裡面，透過 then 與 catch 可以達到一部分一部分處理程式

```jsx
async1()
  .then(() => async2())
  .then(() => async3())
  .catch((err) => errorHandler1())
  .then(
    () => async4(),
    (err) => errorHandler2()
  )
  .catch((err) => console.log("Don't worry about it"))
  .then(() => console.log("All done!"));
```

而在使用 Promise 的時候，要知道哪一個段會在哪裏執行，以上面的程式碼爲例，我們習慣 then 只包處理 fulfilled 的 function ，所以當 async1 傳入 rejected 的時候：

- 並不會執行到 async2 跟 async3 因爲沒有 reject 的 function
- 所以會被 catch 接到，並執行 errorHandler1，並且當再往下傳的時候，狀態就會變成 fulfilled
- 這時候就會執行 async4 ，而這時候被處理過後狀態還是 fulfilled
- 不會被 catch 接到，因爲狀態是 fulfilled ，最後被 then 接到，就印出 All done!

## then

then 如果要往下傳有一些規則

- 如果 then 裡面包的不是 function ，則忽略
- 如果 function 有 return ，會將值當作下一個 then 的 value 傳入

```jsx
function doSomething1() {
  console.log("doSomething1 start");
  return new Promise(function (resolve, reject) {
    console.log("doSomething1 end");
    resolve(1);
  });
}

function doSomething2() {
  console.log("doSomething2");
  return 2;
}

function finalThing(value) {
  console.log("finalThing");
  console.log(value);
  return 0;
}

// 第 1 種傳入參數
// 正常傳入 function
doSomething1().then(doSomething2).then(finalThing); // 2

// 第 2 種傳入參數
// 因爲 function 執行了，變成他的 return 值 2 ，就會忽略這一個，並繼續把原本的 value 往下傳
doSomething1().then(doSomething2()).then(finalThing); // 1

// 第 3 種傳入參數
// function 執行完後如果沒有寫 return ，則會預設都是 undefined
// 所以就會把 undefined 當作 value 往下傳
doSomething1()
  .then(function () {
    doSomething2();
  })
  .then(finalThing); // undefined

// 第 4 種傳入參數
// 正常傳入參數，並且傳出 function doSomething2 執行完的 2 ，所以 value 是 2
doSomething1()
  .then(function () {
    return doSomething2();
  })
  .then(finalThing); // 2
```

## Promise.resolve 與 Promise.reject

這兩個是 Promise 的方法，只用於單純的傳入物件、值或外部的 thenable 物件，轉換為 Promise 物件，可以讓值被以 resolve 或是 reject 的形式往下連結

```jsx
Promise.resolve("Success").then(
  function (value) {
    console.log(value); // "Success"
  },
  function (value) {
    // 不會被呼叫
  }
);
```

## Promise.all 與 Promise.race

兩者都可以傳入一個 iterable ，可以傳入類陣列當參數，通常都回傳入 array

- Promise.all
  - 陣列中的索引值與執行順序無關
  - 陣列中的值如果不是 Promise 物件，會自動使用`Promise.resolve`方法來轉換
  - 執行過程中只要有"**其中一個(any)**"陣列中的 Promise 物件執行發生錯誤例外，或是有 Promise 的 reject 情況，會立即回傳一個 rejected 狀態 promise 物件
  - 實現完成後，接下來的 then 方法會獲取到的值是陣列值

```jsx
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 1000);
});

Promise.all([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err.message);
  });

//結果: [3, 1337, "foo"]
```

- Promise.race
  - "任何一個"陣列傳入參數的 Promise 物件有解決，就會往下傳
  - 如果同時解決，依照陣列的順序決定傳入誰(前面的先傳入)

```jsx
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 1000);
});

Promise.race([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err.message);
  });

//結果: 3
```
