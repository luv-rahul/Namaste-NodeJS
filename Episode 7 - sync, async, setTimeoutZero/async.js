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
