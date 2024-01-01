const defaultNumElement = document.getElementById("defaultNum");
const newNumElement = document.getElementById("newNum");
const keysContainer = document.querySelector(".keys");

let currentNumber = "";
let defaultNumber = "";
let operator = "";

function clear() {
  defaultNumElement.textContent = defaultNumber;
  currentNumber = "";
  newNumElement.textContent = "";
}

function numberClick(number) {
  currentNumber += number;
  defaultNumElement.textContent = defaultNumber;
  newNumElement.textContent = currentNumber;
}

function operatorClick(op) {
  defaultNumber = currentNumber + op;
  currentNumber = "";
  operator = op;
}

function calculate() {
  const num1 = parseFloat(defaultNumber);
  const num2 = parseFloat(currentNumber);

  switch (operator) {
    case "%":
      currentNumber = (num1 * (num2 / 100));
      break;
    case "+":
      currentNumber = (num1 + num2);
      break;
    case "-":
      currentNumber = (num1 - num2);
      break;
    case "x":
      currentNumber = (num1 * num2);
      break;
    case "/":
      if (num2 !== 0) {
        currentNumber = (num1 / num2);
      } else {
        currentNumber = "Error";
      }
    default:
      break;
  }
  defaultNumber = "";
  operator = "";
  defaultNumElement.textContent = defaultNumber;
  newNumElement.textContent = currentNumber;
}

keysContainer.addEventListener("click", function (event) {
  const target = event.target;
  const keyValue = target.textContent;
    switch (keyValue) {
      case "AC":
        clear();
        break;
      case "=":
        calculate();
        break;
      case "%":
      case "+":
      case "-":
      case "x":
      case "/":
        operatorClick(keyValue);
        break;
      default:
        numberClick(keyValue);
        break;
    }
  }
);
