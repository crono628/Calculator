// const output = document.querySelector('#output').textContent;

const btn = document.querySelectorAll('#output');
btn.forEach((option) => {
  let array = []
  option.addEventListener('click', function () {
    output = this.textContent
    array.push(output)
  });
  console.log(array)
});




// console.log(btnPress())



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