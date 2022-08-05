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
const operators = document.querySelectorAll("#operator");
const resets = document.querySelectorAll("#reset");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

let curValue = "";
let secondaryValue = "";
let curOperator = "";
let len = 0;
let decimalCount = 0;
let result = 0;



nums.forEach(num => num.addEventListener('click', () => {
  if (curValue.length < 9) {
    secondaryValue = num.textContent.trim();
    if (curValue[0] != "0" || curValue == "") {
      if (curOperator.length === 1) {
        digits.textContent = secondaryValue;
        curOperator = "";
        curValue = result.toString();

      }
      else {
        curValue += secondaryValue;
        secondaryValue = "";
      }
      digits.textContent = curValue;

    }
    else {
      return;
    }
  }
}));


