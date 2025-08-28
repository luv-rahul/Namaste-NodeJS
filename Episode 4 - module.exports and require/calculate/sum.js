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
