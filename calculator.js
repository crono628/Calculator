const btn = document.querySelectorAll('.btn');
const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clearBtn');
const equalsBtn = document.querySelectorAll('#equalsBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

let ready = false;
let display = [];
let hold = [];
let calculation = [];
let solution = [];

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
  solution = [];
  notReady();
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    display.push(button.textContent);
    hold.push(button.textContent);
    calculation.unshift(hold.join(''))
    
    output.textContent = display.join('')
    isReady();
    // console.log(calculation);
    // calculation.shift();
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener('click', () => {
    hold = [];
    if (ready == false) {
      return;
    } else {
      display.push(button.textContent);
      // hold.push(button.textContent);
      calculation.push(button.textContent);
      output.textContent = display.join('');
      notReady();
      console.log(calculation);

    }
  })
})

clearBtn.addEventListener('click', () => {
  output.textContent = "";
  allClear()
});

equalsBtn.forEach((button) => {
  button.addEventListener('click', () => {


  })
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let doMath = function (operator, a, b) {
  switch (operator) {
    case ' + ':
      return add(a, b);
    case ' - ':
      return subtract(a, b);
    case ' * ':
      return multiply(a, b);
    case ' / ':
      if (b === 0) {
        return 'ERROR';
      } else {
        return divide(a, b);
      }
  }
}

