const buttons = document.querySelectorAll('button')
const bottomDisplay = document.querySelector('.bottom-display')
const operatorDisplay = document.querySelector('.operator')
const topDisplay = document.querySelector('.digits')
const operatorArray = ['+', '-', '*', '/']
let temp = 0

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonData = button.dataset.btn
    let calcData = button.dataset.calc
    bottomDisplay.innerText += buttonData
    let currentNumber = bottomDisplay.innerText
    let previousNumber = topDisplay.innerText
    let operator = operatorDisplay.innerText
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
      }
    }
    if (calcData === '=') {
      if (previousNumber && currentNumber) {
        temp = calculate(operator, previousNumber, currentNumber)
        bottomDisplay.innerText = Math.round(temp * 10000) / 10000
        topDisplay.innerText = ''
        operatorDisplay.innerText = ''
        console.log(typeof currentNumber)
      }
    }
  })
})

document.addEventListener('keydown', (e) => {
  let currentNumber = bottomDisplay.innerText
  let previousNumber = topDisplay.innerText
  let operator = operatorDisplay.innerText
  if (e.key >= 0 && e.key <= 9) {
    return bottomDisplay.innerText += e.key
  }
  if (e.key == 'Backspace') {
    clear()
  }
  if (operatorArray.includes(e.key)) {
    if (bottomDisplay.innerText == 'ERROR') {
      return
    } else if (!operator) {
      topDisplay.innerText = bottomDisplay.innerText
      operatorDisplay.innerText = e.key
      bottomDisplay.innerText = ''
    }
  }
  if (e.key === 'Enter') {
    if (previousNumber && currentNumber) {
      temp = calculate(operator, previousNumber, currentNumber)
      bottomDisplay.innerText = Math.round(temp * 10000) / 10000
      topDisplay.innerText = ''
      operatorDisplay.innerText = ''
      console.log(typeof currentNumber)
    }
  }
})

function clear() {
  bottomDisplay.innerText = ''
  topDisplay.innerText = ''
  operatorDisplay.innerText = ''
  temp = 0
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