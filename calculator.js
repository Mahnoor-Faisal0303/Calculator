  let DIcon = document.getElementById("darkModeIcon");
  let WIcon =document.getElementById("whiteModeIcon");
  document.getElementById("whiteModeIcon").addEventListener("click", function () {

    document.getElementById("containerId").classList.replace("containerWhite","container");
    document.querySelectorAll(".whitebtns").forEach(function (btn) {
    btn.classList.replace("whitebtns", "blackbtns");
});
    // DIcon.classList.replace("displayNone","displayShow");
    // WIcon.classList.replace("displayShow","displayNone");

    DIcon.style.display="block";
    WIcon.style.display="none";
    document.getElementById("rectangle1Id").classList.replace("rectangle1White","rectangle1");
  });
  document.getElementById("darkModeIcon").addEventListener("click", function () {
    document.getElementById("containerId").classList.replace("container","containerWhite");
  document.querySelectorAll(".blackbtns").forEach(function (btn) {
    btn.classList.replace("blackbtns", "whitebtns");
});

   
    // DIcon.classList.add("displayNone");
    // DIcon.classList.add("displayShow");
    // WIcon.classList.add("displayNone");
    // WIcon.classList.add("displayShow");
 // DIcon.classList.replace("displayShow", "displayNone");
    // WIcon.classList.replace("displayNone", "displayShow");

    DIcon.style.display="none";
    WIcon.style.display="block";
    document.getElementById("rectangle1Id").classList.replace("rectangle1","rectangle1White");
  
  });

const defaultNumElement = document.getElementById("defaultNum");
const newNumElement = document.getElementById("newNum");
const keysContainer = document.querySelector(".keys");

let currentNumber = "";
let defaultNumber = "";
let operator = "";

function clear() {
  defaultNumber = "";
  operator = "";
  defaultNumElement.textContent = "";
  currentNumber = "";
  newNumElement.textContent = "";
}

function numberClick(number) {
  currentNumber += number;
  defaultNumElement.textContent = defaultNumber;
  newNumElement.textContent = currentNumber;
}

function operatorClick(op) {
  if(defaultNumber!==""){
    calculate();
  }
  defaultNumber = currentNumber + op;
  currentNumber = "";
  operator = op;
  defaultNumElement.textContent = defaultNumber;
  newNumElement.textContent = currentNumber;
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
      } 
      else if(num1==0 && num2==0){
        currentNumber = 0;
      }
      else {
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
