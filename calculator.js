const buttons = document.querySelectorAll('button')
const bottomDisplay = document.querySelector('.bottom-display')
const topDisplay = document.querySelector('.top-display')

buttons.forEach(button => {
  button.addEventListener('click',() => {
    bottomDisplay.textContent += button.dataset.btn
  })
})

function operation (){
  
}