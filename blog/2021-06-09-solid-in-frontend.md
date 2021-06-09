---
title: SOLID in FrontEnd
tags: [Frontend]
description: 解釋認知的 SOLID 與前端應用的情景.
hide_table_of_contents: false
---

SOLID 是軟體設計重要的五個基礎，讓你的程式碼可以隨時在可變動的情況；但相對來說，這一個 `心法` 並不是這麼好實踐，尤其是運用在正在寫的程式上。

<!--truncate-->

以一個前端工程師來說，如何運用 SOLID 在 UI、Component 內就是一個很大的難題，所以這篇就是實務上要運用在前端的話，會有什麼例子：

（以下範例皆使用 React 爲 Example）

## SRP: Single Responsibility Principle(單一職責)

定義：規定每個類都應該有一個單一的功能，並且該功能應該由這個類完全封裝起來。所有它的（這個類的）服務都應該嚴密的和該功能平行

白話：一個 Class / Component / Function 只做一件事

實務：

例如今天設計了一個 Icon 的 Component ，負責顯示 Icon，可能簡單的就會這樣寫

```jsx
function Icon() {
	return (
		<div> {引入的 Icon} </div>
	)
}
```

但今天多了一個需求，這一個 Icon 可以被點擊，所以可能就會這樣寫

```jsx
function Icon({onClick}) {
	return (
		<div onClick={onClick}> {引入的 Icon} </div>
	)
}
```

然後又說，有的 Icon 是可以被點的，有的不行，可能又會改成這樣

```jsx
function Icon({type, onClick}) {
	if(type === ...) {
		return (
			<div> {引入的 Icon} </div>
		)
	}
	return (
		<div onClick={onClick}> {引入的 Icon} </div>
	)
}
```

然後又說....

這樣這一個 Icon 的 Component 雖然達到了需求，但變得不只處理一件事情，同時要兼顧顯示與點擊事件

在我的觀點上，爲了符合單一職責原則，點擊與顯示應該是兩件事情， 應該要分開來實作

```jsx
// 顯示
function Icon() {
	return (
		<div> {引入的 Icon} </div>
	)
}
// 點擊
function Button({ children, onClick }) {
	return (
		<button onClick={onClick}> {children} </button>
	)
}
// 可以被點擊的顯示
function IconButton() {
	return (
		<Button>
			<Icon/>
		</Button>
	)
}
```

單一職責原則最難的地方在於，什麼樣的事情才是 `最小的事`，如果切的太細，使用上要引入很多東西才能完成一個流程；切的太大，內部可能就要很多的 去判斷一些特例的狀況或是時常需要去修改內部的邏輯

## OCP: Open Closed Principle(開放封閉)

定義：當新增需求的時候（功能變化），在不改變現有程式碼的前提之下，藉由增加新的程式碼來實作新的功能。

實務：

例如在設計一個 Button 元件的時候

```jsx
import React from 'react'
import PropTypes from 'prop-types';

// 定義 button 可能需要的介面
const ColorEnums = [...];
const SizeEnums = [...];
const TypeEnums = [...];

const propTypes = {
	color: PropTypes.oneOf(ColorEnums),
	size: PropTypes.oneOf(SizeEnums),
	type: PropTypes.oneOf(TypeEnums),
}

function Button({color, type, size, text}) {
	return (
		// 實作介面的地方
		<button className={`${color} ${type} ${size}`}>
			{text}
		</button>
	)
}

Button.propTypes = propTypes;
Button.ColorEnums = ColorEnums;
Button.SizeEnums = SizeEnums;
Button.TypeEnums = TypeEnums;

export default Button;
```

開放：可以開出 Color、Size、Type 等共用的介面，讓使用者去組出需要的按鈕

封閉：不會讓使用者隨意的去修改介面，如我的 Type 只能是圓形或矩形，就不會出現三角形的按鈕

好修改：而當今天需要多一個三角形的按鈕，我只需要增加 Type 內選項就可以，不會影響到正在使用這一個元件的頁面，

## LSP: Liskov Substitution Principle(Liskov 替換)

定義：繼承時子類別所造成的「行為變化」要如何設計，才可以讓程式在 runtime 透過多型所繫結（bind）到的子類別實作，不至於違反父類別介面的合約

實務：

這一個我的理解是，在前端來說，就是不要讓 Component 違反原本預期的操作

我們可能會設計一個 List ，我們可能是要放一個 Array 讓他做簡單的 render，而有可能會有一個 css class name 叫 level 去定義這一個 List 是一個水平的（先不糾結 css 命名）

```jsx
function LevelList({ data }) {
	return (
		<ul className="level">
			{
				data.map(item => (<li>{item}</li>))
			}
		</ul>
	)
}

// css
.level {
	display: flex;
	align-item: center;
	justify-content space-between
}
```

然後可以有一個 Component 引用了這一個 List，但卻修改/覆蓋了部分東西

```jsx
import LevelList from './levelList.js';
function TitleList({ title, data }){
	return (
		<div className="title-list"}>
			{title}
			<LevelList data={data}></List>
		</div>
	)
}

// css
.title-list {
	.level {
		display: block;
	}
}
```

或許這一個方式我們很常見，使用 css 的權重去覆蓋其他 css

但這邊就有一個很奇怪的地方，明明是叫 LevelList，卻呈現垂直的樣式，然後也違反原本 LevelList 希望讓列表呈現水平的樣式，這就是在設計上比較不好的地方

或許應該是要讓 List 有水平與垂直的介面，讓使用者決定要使用那一種樣式，會比直接覆蓋 css 樣式還要讓人好懂與漂亮

## ISP: Interface Segregation Principle(介面隔離)

定義：針對不同的客戶端，只開放其所需要的介面讓它使用，如此一來可避免與降低客戶端因為不相關介面改變也一起被迫需要改變的問題。

實務：

你的頁面或許會有結帳功能，可以有貨到付款、 ATM 轉帳、信用卡結帳，而部分結帳功能可能會有一些條件，例如綁定信用卡才能用信用卡結帳

如果你將所有選項給使用者選擇，那是不是就會有信用卡沒綁定的使用者去使用信用卡結帳，然後發現不能結的問題

這時候就不要讓使用者有與他身份不符合的介面出現，就不會有上面的問題，這樣也能增加使用者體驗，將使用者需要與不需要的介面隔離起來

## DIP: Dependency Inversion Principle(依賴倒轉)

定義：caller 和 callee 之間的關係，在兩者之間增加一個（抽象）介面，避免 caller（上層程式）因為 callee（底層程式）改變而被迫改變。

實務：

這一個是我認爲前端最難舉例的，只能先用圖來跟大家說什麼是依賴反轉

上層的程式一定會依賴底層程式，但我們儘量要把底層程式封裝成一個抽象的介面，讓上層程式使用這個抽象層就好，好處是底層有改變，不用修改所有跟這個底層有關的程式，主要修改這一個抽象層就好

![https://upload.wikimedia.org/wikipedia/commons/9/96/Dependency_inversion.png](https://upload.wikimedia.org/wikipedia/commons/9/96/Dependency_inversion.png)

如果之後有好的例子再補上惹...

### 結論

越底層的越要遵守 SOLID，如在做最底層共用的 Component 的時候，就要去思考 Component 介面、使用時機、邏輯要放在 Component 內還是由外部控制，保持 Component 的複用性與靈活性

而呼應前面，SOLID 是 `心法`，並不是侷限在 Component 或是前端上才能實踐或運用，而是在寫任何程式的地方，都要時時注意是否會因爲改變而造成程式有 bug 或是牽一髮動全身的狀況

```jsx
最好的程式，不是以不變以應萬變，而是想變得時候就變
```

參考資料

[搞笑談軟工](http://teddy-chen-tw.blogspot.com/2014/04/solid.html)

[写了这么多年代码，你真的了解 SOLID 吗？](https://juejin.im/entry/5b9b1044f265da0a89301cb3)
