// File: script.js
// Simple calculator using JavaScript
// Technical IT course - IFSul Passo Fundo

function getNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  return [n1, n2];
}

function add() {
  const [n1, n2] = getNumbers();
  showResult(n1 + n2);
}

function subtract() {
  const [n1, n2] = getNumbers();
  showResult(n1 - n2);
}

function multiply() {
  const [n1, n2] = getNumbers();
  showResult(n1 * n2);
}

function divide() {
  const [n1, n2] = getNumbers();

  if (n2 === 0) {
    showResult("Cannot divide by zero");
  } else {
    showResult(n1 / n2);
  }
}

function showResult(value) {
  document.getElementById("result").innerText = "Result: " + value;
}
