function getNumber() {
  return 1 + Math.floor(Math.random() * 10);
}

function getOperation() {
  var index = Math.floor(Math.random() * 4);

  if (index === 0) {
    return "-";
  }
  if (index === 1) {
    return "+";
  }
  if (index === 2) {
    return "*";
  }

  return "/";
}

function getResult() {
  const num1 = parseFloat(document.getElementById("num1").innerText);
  const num2 = parseFloat(document.getElementById("num2").innerText);
  const op = document.getElementById("op").innerText;
  const ans = parseFloat(document.getElementById("answer").value);

  const expected = calculate(num1, num2, op);

  if (expected === ans) {
    document.getElementById("result").innerText = "Pass";
  } else {
    document.getElementById("result").innerText = "Fail";
  }
}

function init() {
  document.getElementById("num1").innerText = getNumber();
  document.getElementById("num2").innerText = getNumber();
  document.getElementById("op").innerText = getOperation();
  document.getElementById("answer").innerText = "";
  document.getElementById("result").innerText = "";
}

function calculate(num1, num2, op) {
  if (op === "-") {
    return num1 - num2;
  }
  if (op === "+") {
    return num1 + num2;
  }

  if (op === "*") {
    return num1 * num2;
  }

  if (op === "/") {
    return num1 / num2;
  }
}
