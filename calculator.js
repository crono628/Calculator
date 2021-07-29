const btn = document.querySelectorAll('.btn, .operatorBtn');
const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clearBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn')

let num = btn.forEach((button) => {
  button.addEventListener('click', () => {
    output.textContent += `${button.textContent}`;
    console.log(`${output.textContent}`)
  });
});

console.log(num)

clearBtn.addEventListener('click', () => {
  output.textContent = "";
});

equalsBtn.addEventListener('click', () => {
  operatorSelect(`${output.textContent}`);
});

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



