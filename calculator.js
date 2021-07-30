const btn = document.querySelectorAll('.btn, .operatorBtn');
const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clearBtn');
const equalsBtn = document.querySelectorAll('#equalsBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
let readyForB = false;

let calculatorObj = {
  operandA: 0,
  operandB: 0,
  operatorObj: null
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    output.textContent += button.textContent;
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    operatorBtn.textContent = calculatorObj.operatorObj;
    readyForB = true;
    logNum()
    console.log(calculatorObj);
  })
})

clearBtn.addEventListener('click', () => {
  output.textContent = "";
  reset();
  console.log(readyForB);
});

equalsBtn.forEach((button) => {
  button.addEventListener('click', () => {
    operatorSelect(calculatorObj.operatorObj, calculatorObj.operandA, calculatorObj.operandB);
  })
});

function logNum() {
  if (readyForB = false) {
    calculatorObj.operandA = output.textContent;
  }
  if (readyForB = true) {
    calculatorObj.operandB = output.textContent;
  }
  console.log(readyForB);
}

function reset() {
  readyForB: false
  calculatorObj = {
    operandA: 0,
    operandB: 0,
    operatorObj: null
  }
}

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operatorSelect = function (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b === 0) {
        return 'ERROR';
      } else {
        return divide(a, b);
      }
      default:
        return null;
  }
}