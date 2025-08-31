# 🚀 Namaste NodeJS : Episode 7

## Synchronous, Asynchronous Operations & setTimeout(0)

---

## 📋 Table of Contents

- [Synchronous Operations](#-synchronous-operations)
- [Asynchronous Operations](#-asynchronous-operations)
- [Blocking vs Non-Blocking](#-blocking-vs-non-blocking)
- [setTimeout with Zero Delay](#-settimeout-with-zero-delay)

---

## 🔄 Synchronous Operations

### `sync.js`

```javascript
console.log("Hello World");

var a = 1078698;
var b = 20986;

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World
Multiplication result is: 22637556228
```

---

## ⚡ Asynchronous Operations

### `async.js`

```javascript
const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data Fetched Successfully!");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data: ", data);
});

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World
Multiplication result is: 22637556228
File data: This is file data.
Data Fetched Successfully!
setTimeout called after 5 seconds
```

---

## 🔄 Blocking vs Non-Blocking

### `async.js` (with Sync Operation)

```javascript
const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data Fetched Successfully!");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Sync
fs.readFileSync("./file.txt", "utf8"); // Blocking
console.log("This will execute after only file read");

// Async
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data: ", data);
});

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World
This will execute after only file read
Multiplication result is: 22637556228
File data: This is file data.
Data Fetched Successfully!
setTimeout called after 5 seconds
```

---

## 🚫 Blocking Operations Example

### `blocking.js`

```javascript
const crypto = require("crypto");

console.log("Hello World!");

var a = 1078698;
var b = 20986;

// Sync -> Block the main thread - DON'T USE
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Sync Key is generated");

// Async Password Based Key Derivation Function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Key is generated");
});

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World!
Sync Key is generated
Multiplication result is: 22637556228
Key is generated
```

---

## ⏱️ setTimeout with Zero Delay

### `setTimeoutZero.js` (3 seconds delay)

```javascript
console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World
Multiplication result is: 22637556228
Call me after 3 seconds
```

### ❓ Will setTimeout be called immediately?

**Answer: No.**

### `setTimeoutZero.js` (Zero delay)

```javascript
console.log("Hello World");

var a = 1078698;
var b = 20986;

// This callback will only be pushed to V8, once the call stack is empty.
setTimeout(() => {
  console.log("Call me right now!");
}, 0); // Trust issues with setTimeout

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
```

**Output:**

```
Hello World
Multiplication result is: 22637556228
Call me right now!
```

---

_Understanding the Event Loop and Call Stack behavior in Node.js_
