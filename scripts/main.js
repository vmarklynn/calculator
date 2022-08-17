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

function resetAll()

const container = document.querySelector(".container");
const digits = container.querySelector(".digits");
const nums = document.querySelectorAll("#num");
const resets = document.querySelectorAll("#reset");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

let firstPress = true;
let waitForOperand = false;
let curValue = "";
let displayValue = "";
let curOperator = "";
let decimalCount = 0;


nums.forEach(num => num.addEventListener('click', (e) => {
  // limit the max digits
  if (displayValue.length < 9) {
    if (!isOperator(num.textContent.trim())) {
      // Replaces the 0 default digit in digit.textContent()
      if (firstPress) {
        digits.textContent = "";
        digits.textContent += num.textContent.trim();
        firstPress = false;
      }
      // Normal number will be added to the display
      displayValue += num.textContent.trim();
      digits.textContent = displayValue;
    }
    else {
      if (waitForOperand) {
        let result = operate(parseFloat(curValue), parseFloat(displayValue), curOperator);
        displayValue = result.toString();
        digits.textContent = displayValue;
      }
      curOperator = num.textContent.trim();
      curValue = displayValue;
      displayValue = "";
      waitForOperand = true;
    }
  }
}));

// TODO: Ensure that there is only one operator 
// TODO: Implement decimal points
// TODO: Implement equal sign
