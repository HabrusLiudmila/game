
const MAX_VALUE = 100
const MIN_VALUE = 0
const ATTEMT = 10

function getPlayerName() {
    const playerName = prompt('Привет!Как тебя зовут?', '')
    return playerName
}

const name = getPlayerName()

const getRandomNumber = (maxValue)=> {
    const randomNumber = Math.round(Math.random() * maxValue)
    return randomNumber
}

const randomNumber = getRandomNumber(MAX_VALUE)

const game = ( minValue, maxValue,attNumber, playerName ,randomNumber) =>{
    alert(`Привет, ${playerName} !
    Я загадал число в интервале от ${minValue} до ${maxValue}. У тебя есть ${attNumber} попыток отгадать его.`)
}

for (let i = 1; i <= attNumber; i++) {
   const plaerAnswer = prompt('Какое число я загадал?','')
    
}

/*1:46:10