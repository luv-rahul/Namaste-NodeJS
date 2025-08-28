# 🚀 Namaste NodeJS - Episode 4

## 📦 module.exports & require

> Understanding how to share code between modules in Node.js using CommonJS and ES modules

---

## 🎯 Basic Module System

### 📁 File Structure

```
project/
├── app.js
├── xyz.js
└── sum.js
```

### 📄 **app.js**

```js
require("./xyz"); // One module into another
const calculateSum = require("./sum");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
console.log(name);
```

### 📄 **xyz.js**

```js
console.log("Very important code!");
```

### 📄 **sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = calculateSum;
```

---

## 📤 Exporting Multiple Things

### 📄 **app.js**

```js
require("./xyz"); // One module into another
const obj = require("./sum");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

obj.calculateSum(a, b);
console.log(obj.x);
console.log(name);
```

### 📄 **sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x: x,
  calculateSum: calculateSum,
};
```

---

## 🔄 **Destructuring**

### 📄 **app.js**

```js
require("./xyz"); // One module into another
const { x, calculateSum } = require("./sum");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
console.log(x);
console.log(name);
```

### 📄 **sum.js** (Option 1)

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x: x,
  calculateSum: calculateSum,
};
```

### 📄 **sum.js** (Option 2 - ES6 Shorthand)

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x,
  calculateSum,
};
```

---

## 🆕 ES Modules

### ⚙️ **package.json**

```js
{
    "type": "module"
}
```

### 📄 **app.js**

```js
// require("./xyz"); // One module into another
// const { x, calculateSum } = require("./sum");

import { x, calculateSum } from "./sum.js";

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
console.log(x);
console.log(name);
```

### 📄 **sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

export var x = "Hello World";

export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// module.exports = {
//   x,
//   calculateSum,
// };
```

---

## ⚠️ **Strict Mode - Gives error**

### 📄 **app.js**

```js
// require("./xyz"); // One module into another
// const { x, calculateSum } = require("./sum");

import { calculateSum } from "./sum.js";

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

// calculateSum(a, b);
// console.log(x);
console.log(name);
```

### 📄 **sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

z = "Hi!";

var x = "Hello World";

export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// module.exports = {
//   x,
//   calculateSum,
// };
```

---

## 🔄 Another way of module.exports

### 📄 **sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log(module.exports); // Empty object

// module.exports = {
//   x,
//   calculateSum,
// };

module.exports.x = x;
module.exports.calculateSum = calculateSum;
```

---

## 📁 Folder as Module

### 📁 File Structure

```
project/
├── app.js
├── xyz.js
└── calculate/
    ├── index.js
    ├── sum.js
    └── multiply.js
```

### 📄 **app.js** (Initial)

```js
require("./xyz"); // One module into another
const { x, calculateSum } = require("./calculate/sum");
const calculateMultiply = require("./calculate/multiply");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
console.log(name);
```

### 📄 **calculate/sum.js**

```js
console.log("Sum module executed!");

/*By default, modules protect their variables and functions from leaking.*/

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log(module.exports); // Empty object

module.exports = {
  x,
  calculateSum,
};
```

### 📄 **calculate/multiply.js**

```js
function calculateMultiply(a, b) {
  const result = a * b;
  console.log(result);
}

module.exports = calculateMultiply;
```

### 📄 **calculate/index.js**

```js
const { x, calculateSum } = require("./sum");
const calculateMultiply = require("./multiply");

module.exports = { x, calculateSum, calculateMultiply };
```

### 📄 **app.js** (Final - Using index.js)

```js
require("./xyz"); // One module into another
// const { x, calculateSum } = require("./calculate/sum");
// const calculateMultiply = require("./calculate/multiply");

const { x, calculateSum, calculateMultiply } = require("./calculate/index");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
console.log(name);
```

---

## 📊 JSON Module

### 📄 **data.json**

```json
{
  "name": "Rahul",
  "city": "Delhi",
  "country": "India"
}
```

### 📄 **app.js**

```js
require("./xyz"); // One module into another

// const { x, calculateSum } = require("./calculate/sum");
// const calculateMultiply = require("./calculate/multiply");

const { x, calculateSum, calculateMultiply } = require("./calculate/index");

const data = require("./data.json");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
console.log(data);

console.log(name);
```

---

## 🎓 Key Takeaways

- 🔒 **Modules protect their variables and functions from leaking by default**
- 📤 **Use `module.exports` to share code between CommonJS modules**
- 📥 **Use `require()` to import modules**
- 🎯 **Destructuring allows clean extraction of specific exports**
- ⚡ **ES modules use `import`/`export` syntax**
- 📁 **Folders can be treated as modules using `index.js`**
- 📊 **JSON files can be directly required as modules**

---

_Happy coding with Node.js modules! 🎉_
