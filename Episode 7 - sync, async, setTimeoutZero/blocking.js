const crypto = require("crypto");

console.log("Hello World!");

var a = 1078698;
var b = 20986;

// Sync -> Block the main thread - DON't USE
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
