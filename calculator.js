const buttons = document.querySelectorAll('button')
const bottomDisplay = document.querySelector('.bottom-display')
const topDisplay = document.querySelector('.top-display')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonData = button.dataset.btn
    bottomDisplay.textContent += buttonData
    if (buttonData === 'c') {
      clear()
    }
    // if (buttonData === '='){
    //   calculate()
    // }
  }) 
})

function clear() {
  bottomDisplay.textContent = ''
  topDisplay.textContent = ''
}

function calculate(operator, a, b) {
  if (a && b) {
    switch (operator) {
      case '+': parseFloat(a + b)
        break;
      case '-': parseFloat(a - b)
        break;
      case '*': parseFloat(a * b)
        break;
      case '/': parseFloat(a / b)
        break;
    }
  }
}