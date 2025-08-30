# 🚀 Namaste NodeJS: Episode 5

## 🔄 IIFE

All the code of the module is wrapped inside a function - Immediately Invoked Function Expression.

### 📁 xyz.js

```js
function x() {
  const a = 10;

  function b() {
    console.log("b");
  }
}

console.log(a); // Unaccessible - ReferenceError: a is not defined
```

```js
require("./path");

// Immediately invoked function expression
(function (module, require) {
  //All the code of the module here!
})();
```

## ⚙️ 5 Step Mechanism

### 1️⃣ **Resolving the module**
- `./localpath`
- `./json`
- `./node:module`

### 2️⃣ **Loading the module**
- File content is loaded according to file type.

### 3️⃣ **Wraps inside IIFE**
- Module is wrapped inside IIFE

### 4️⃣ **Evaluation**
- `module.exports`

### 5️⃣ **Caching**
- Module is cached

> **📝 Note:**
> In caching process, module is cached and whenever that module is called, it is fetched form cache.

---

After all the process, the code is passed to **V8 chrome's JS engine**.