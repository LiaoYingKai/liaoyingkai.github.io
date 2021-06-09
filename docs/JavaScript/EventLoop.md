# 非同步程式設計與事件迴圈

### 同步

程式碼執行順序由上而下，依序執行

### 非同步

將會阻塞的程式組成一個非同步的函式，先往任務佇列(task queue / callback queue / )丟，在主線程都執行完後，會執行在任務佇列的等候處理的 function

### Event loop

事件迴圈可以想成一個內部的迴圈，當只有在呼叫堆疊空空如也時，才會把佇列中任務移回呼叫堆疊

### W3C 規範的佇列類型

- Events(事件): EventTarget 物件異步分派到對應的 Events 物件
- Parsing(解析): HTML parser
- Callbacks(回調): 呼叫異步回調函式
- 使用外部資源: 資料庫、檔案、Web I/O
- DOM 處理的反應: 回應 DOM 處理時的元素對應事件

### JS 的異步

- setTimeout
- setInterval
- XMLHttpRequest
- requestAnimationFrame
- WebSocket
- Worker
- 某些 HTML5 API，例如 File API、Web Database API
- 有使用 onload 的 API

執行非同步的順序爲：誰先進入任務佇列等待，就誰先執行，

```jsx
function aFunc(value, cb) {
  setTimeout(cb, 1000, value);
}

function bFunc(value, cb) {
  setTimeout(cb, 900, value);
}

function cbA(value) {
  console.log(value);
}

function cbB(value) {
  console.log(value);
}

aFunc("a", cbA);
bFunc("b", cbB);
```

雖然 bFunc 比 aFunc 晚執行，但它會比 aFunc 快一步回到任務佇列，所以就會先執行 bFunc 再執行 aFunc 的結果

多層非同步怎麽執行：

有點類似遞迴，當第一層非同步回來的時候，進入 JS 佇列處理，遇到非同步的又再丟出去，直到都 func 都被執行完

![http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100801.jpg)

![http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

- **Stack**：就是 Function 的 Call Stack，當執行函式時又呼叫了其他函式，便會往上堆積；反之在執行完成後從堆疊移除。
- **Queue**：尚未處理的任務，當 Stack 清空時，將 Queue 的第一項搬去 Stack，並開始執行

  - 而 queue 又分成 macrotask 與 microtask ，通常不特別講的話，會指的是 macrotask ，而運行機制是當每一個 macrotask 被推入主執行序( Stack )執行完的時候(JS 腳本算第一個 macrotask)，會把所有 microtask 的任務執行完，然後更新 UI ，再繼續這一個循環一直下去

  ```jsx
  function withPromise() {
    return new Promise(resolve => {
      console.log('promise func')  // 3
      resolve()
    })
  }
  setTimeout(() => console.log('setTimeout    1111'), 0)  /7
  withPromise()
    .then(() => console.log('then 1111'))  // 9
    .then(() => setTimeout(() => withPromise() // 10
    	.then(() => console.log('then 2222')) // 11
    	.then(() => setTimeout(() => console.log('setTimeout    2222'), 0)) // 12
    	.then(() => console.log('then 3333')), 0)) //13
    .then(() => setTimeout(() => console.log('setTimeout    33333'), 0)) //14

  promise func
  VM2898:9 then 1111
  VM2898:7 setTimeout    1111
  VM2898:3 promise func
  VM2898:11 then 2222
  VM2898:13 then 3333
  VM2898:14 setTimeout    33333
  VM2898:12 setTimeout    2222
  ```

- **Heap**：代表其他記憶體位置，儲存一大堆變數、物件之類的
- Event Loop ： 就是不斷的判斷 stack 是否爲空，空的話拿一個 queue 內的任務放入 stack 執行
