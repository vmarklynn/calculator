function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function isOperator(symbol) {
  if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
    return true;
  }
  return false;
}

function operate(a, b, operatorSymbol) {
  switch (operatorSymbol) {
    case '+':
      return add(a, b);
    case '-':
      return substract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b === 0) {
        throw new Error('Cannot divide by 0.');
      }
      else {
        return divide(a, b);
      }
    default:
      return null;
  }

}

const container = document.querySelector(".container");
const digits = container.querySelector(".digits");
const nums = document.querySelectorAll("#num");
const resets = document.querySelectorAll("#reset");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

let firstPress = true;

let curValue = "";

let displayValue = "";

let curOperator = "";

let decimalCount = 0;


nums.forEach(num => num.addEventListener('click', () => {
  if (displayValue.length < 9) {
    if (!isOperator(num.textContent.trim())) {
      if (firstPress) {
        digits.textContent = "";
        digits.textContent += num.textContent.trim();
        firstPress = false;
      }

      displayValue += num.textContent.trim();
      digits.textContent = displayValue;
      curValue = displayValue;
    }
    // else {
    //   curOperator = num.textContent.trim();
    //   digits.textContent = "";
    //   displayValue = "";
    //   if (curOperator != "") {
    //     displayValue += num.textContent.trim();
    //     digits.textContent = displayValue;
    //   }
    // }

  }
}));

