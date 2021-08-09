const btn = document.querySelectorAll('.btn, .operatorBtn');
const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clearBtn');
const equalsBtn = document.querySelectorAll('#equalsBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

let ready = true;

function notReady() {
  ready = false;
}

function isReady() {
  ready = true;
}


let temp = [];
let display = [];
let calculation = [];
let solution = [];


btn.forEach((button) => {
  button.addEventListener('click', () => {
    output.textContent += button.textContent;
    notReady()
    console.log(ready)
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    operatorBtn.textContent = temp.push(), calculation.push();
    isReady()
    // logNum()
    console.log(ready);
  })
})

clearBtn.addEventListener('click', () => {
  output.textContent = "";
  reset();
  console.log(ready);
});

equalsBtn.forEach((button) => {
  button.addEventListener('click', () => {
    operatorSelect(calculatorObj.operatorObj, calculatorObj.operandA, calculatorObj.operandB);
  })
});



let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operatorSelect = function (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
       break;
    case '*':
      return multiply(a, b);
       break;
    case '/':
      if (b === 0) {
        return 'ERROR';
         break;
      } else {
        return divide(a, b);
         break;
      }
  }
}