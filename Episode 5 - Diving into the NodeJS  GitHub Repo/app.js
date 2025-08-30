require("../xyz"); // One module into another

// const { x, calculateSum } = require("./calculate/sum");
// const calculateMultiply = require("./calculate/multiply");

const { x, calculateSum, calculateMultiply } = require("./calculate/index");

const data = require("../data.json");

const util = require("node:util");

var name = "Namaste NodeJS!";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
console.log(data);
console.log(util);

console.log(name);
