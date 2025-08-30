console.log("Very important code!");

function x() {
  const a = 10;

  function b() {
    console.log("b");
  }
}

console.log(a); // Unaccessible - ReferenceError: a is not defined
