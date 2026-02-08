// File: script.js
// Simple calculator with validation and history
// Technical IT course - IFSul Passo Fundo

let history = [];

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
  const result = n1 + n2;

  addToHistory(`${n1} + ${n2} = ${result}`);
  showResult(result);
}

function subtract() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;
  const result = n1 - n2;

  addToHistory(`${n1} - ${n2} = ${result}`);
  showResult(result);
}

function multiply() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;
  const result = n1 * n2;

  addToHistory(`${n1} × ${n2} = ${result}`);
  showResult(result);
}

function divide() {
  const numbers = getNumbers();
  if (!numbers) return;

  const [n1, n2] = numbers;

  if (n2 === 0) {
    showResult("Cannot divide by zero");
    return;
  }

  const result = n1 / n2;

  addToHistory(`${n1} ÷ ${n2} = ${result}`);
  showResult(result);
}

function addToHistory(entry) {
  history.push(entry);
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById("history");
  historyList.innerHTML = "";

  for (let item of history) {
    const li = document.createElement("li");
    li.innerText = item;
    historyList.appendChild(li);
  }
}

function showResult(value) {
  document.getElementById("result").innerText = "Result: " + value;
}
