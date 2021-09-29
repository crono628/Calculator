const buttons = document.querySelectorAll('button')
const bottomDisplay = document.querySelector('.bottom-display')
const operatorDisplay = document.querySelector('.operator')
const topDisplay = document.querySelector('.digits')
const operatorArray = ['+', '-', '*', '/']
const decimalArray = ['.']
let temp = 0
let decimalGo = true

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonData = button.dataset.btn
    let calcData = button.dataset.calc
    let decimalData = button.dataset.decimal
    bottomDisplay.innerText += buttonData
    let currentNumber = bottomDisplay.innerText
    let previousNumber = topDisplay.innerText
    let operator = operatorDisplay.innerText
    if (decimalArray.includes(decimalData)) {
      if (decimalGo === true) {
        bottomDisplay.innerText += decimalData
        decimalGo = false
      }
    }
    if (buttonData === 'c') {
      clear()
    }
    if (operatorArray.includes(calcData)) {
      if (bottomDisplay.innerText == 'ERROR') {
        return
      } else if (!operator) {
        topDisplay.innerText = bottomDisplay.innerText
        operatorDisplay.innerText = calcData
        bottomDisplay.innerText = ''
        decimalGo = true
      }
    }
    if (calcData === '=') {
      if (previousNumber && currentNumber) {
        temp = calculate(operator, previousNumber, currentNumber)
        bottomDisplay.innerText = Math.round(temp * 10000) / 10000
        topDisplay.innerText = ''
        operatorDisplay.innerText = ''
        decimalGo = true
      }
    }
  })
})

function clear() {
  bottomDisplay.innerText = ''
  topDisplay.innerText = ''
  operatorDisplay.innerText = ''
  temp = 0
  decimalGo = true
}

function calculate(operation, a, b) {
  if (a && b) {
    switch (operation) {
      case '+':
        return parseFloat(a) + parseFloat(b)
      case '-':
        return parseFloat(a) - parseFloat(b)
      case '*':
        return parseFloat(a) * parseFloat(b)
      case '/':
        if (b == 0) {
          return 'ERROR'
        } else {
          return parseFloat(a) / parseFloat(b)
        }
    }
  }
}