const startBtn = document.querySelector('#start')
const sereens = document.querySelectorAll('.screen')

startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})