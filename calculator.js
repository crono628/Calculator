const btn = document.querySelectorAll('.btn');
const upper = document.querySelector('.upper')
const lower = document.querySelector('.lower')
const clearBtn = document.querySelector('#clearBtn');
const equalsBtn = document.querySelectorAll('#equalsBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const zero = document.querySelector('#decimal', '#0')

let ready = false;
let display = [];
let hold = [];
let calculation = [];
let operand = [];

function notReady() {
  ready = false;
}

function isReady() {
  ready = true;
}

function allClear() {
  hold = [];
  display = [];
  calculation = [];
  operand = [];
  notReady();
}



btn.forEach((button) => {
  button.addEventListener('click', () => {
    display.push(button.textContent);
    lower.textContent = display.join('')
    isReady();
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (ready == false) {
      return;
    }
    if (hold[0]) {
      display.push(hold[0])
      calculation.push(button.textContent)
      display.push(button.textContent);
      upper.textContent = display.join('')
      lower.textContent = '';
      lower.textContent = doMath(calculation[0], hold[0], operand[1])
      hold = []
      operand.push(display.join(''))
      display = [];
      notReady();
      console.log(hold);
      console.log(calculation);
      console.log(operand);
      console.log(display);
    } else {
      operand.push(display.join(''))
      display.push(button.textContent);
      calculation.push(button.textContent)
      upper.textContent = display.join('');
      lower.textContent = '';
      display = [];
      notReady();
    }
  })
})

clearBtn.addEventListener('click', () => {
  upper.textContent = '';
  lower.textContent = '';
  allClear()
});

equalsBtn.forEach((button) => {
  button.addEventListener('click', () => {
    operand.push(display.join(''))
    upper.textContent = ''
    lower.textContent = doMath(calculation[0], operand[0], operand[1])
    hold.push(lower.textContent)
    display = [];
    calculation = [];
    operand = [];
  })
});

let add = (a, b) => parseFloat(a) + parseFloat(b);
let subtract = (a, b) => parseFloat(a) - parseFloat(b);
let multiply = (a, b) => parseFloat(a) * parseFloat(b);
let divide = (a, b) => parseFloat(a) / parseFloat(b);

let doMath = function (operator, a, b) {
  if (calculation[0] && operand[0]) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        if (b == 0) {
          return 'ERROR';
        } else {
          return divide(a, b);
        }
    }
  }
}