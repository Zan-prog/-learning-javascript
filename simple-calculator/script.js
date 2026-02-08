// File: script.js
// Simple calculator with validation
// Technical IT course - IFSul Passo Fundo

function getNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  if (n1 === "" || n2 === "") {
    showResult("Please enter both numbers");
    return null;
  }

  n1 = Number(n1);
  n2 = Number(n2);

  if (isNaN(n1) || isNaN(n2)) {
    showResult("Invalid number");
    return null;
  }

  return [n1, n2];
}

function add() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;
  showResult(n1 + n2);
}

function subtract() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;
  showResult(n1 - n2);
}

function multiply() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;
  showResult(n1 * n2);
}

function divide() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;

  if (n2 === 0) {
    showResult("Cannot divide by zero");
    return;
  }

  showResult(n1 / n2);
}

function showResult(value) {
  document.getElementById("result").innerText = "Result: " + value;
}
