// File: functions.js
// Learning functions in JavaScript
// Technical IT course - IFSul Passo Fundo

// Simple function without parameters
function sayHello() {
  console.log("Hello!");
}

sayHello();

// Function with parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Student");
greet("World");

// Function with return value
function sum(a, b) {
  return a + b;
}

let result = sum(10, 5);
console.log("Sum result:", result);

// Arrow function (basic example)
const multiply = (x, y) => {
  return x * y;
};

console.log("Multiplication result:", multiply(4, 3));
