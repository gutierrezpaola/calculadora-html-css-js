var number1 = "";
var number2 = "";
var operation = "";
var result = 0;

function changeNumber(numero) {
  if (operation === "") {
    number1 = number1 + numero;
    document.getElementById("screen").textContent = number1;
  } else {
    number2 = number2 + numero;
    document.getElementById("screen").textContent = number2;
  }
}

function changeOperation(operador) {
  if (number1 !== "" && number2 !== "") {
    calculate();
    number1 = result;
    number2 = "";
    document.getElementById("screen").textContent = result;
  }
  operation = operador;
}

function calculate() {
  switch (operation) {
    case "+":
      result = parseFloat(number1) + parseFloat(number2);
      break;
    case "-":
      result = parseFloat(number1) - parseFloat(number2);
      break;
    case "*":
      result = parseFloat(number1) * parseFloat(number2);
      break;
    case "/":
      result = parseFloat(number1) / parseFloat(number2);
      break;
    default:
      break;
  }
}

function reset() {
  number1 = "";
  number2 = "";
  operation = "";
  result = 0;
  document.getElementById("screen").textContent = 0;
}
