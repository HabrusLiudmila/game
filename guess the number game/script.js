
const MAX_VALUE = 100
const MIN_VALUE = 0
const ATTEMT = 10

function getPlayerName() {
    const playerName = prompt('Привет!Как тебя зовут?', '')
    return playerName
}

const playerName = getPlayerName()

const getRandomNumber = (maxValue)=> {
    const randomNumber = Math.round(Math.random() * maxValue)
    return randomNumber;
}

const randomNumber = getRandomNumber(MAX_VALUE)

const game = ( minValue, maxValue,attNumber, playerName ,randomNumber) =>{
    alert(`Привет, ${playerName}!
    Я загадал число в интервале от ${minValue} до ${maxValue}. У тебя есть ${attNumber} попыток отгадать его.`)


for (let i = 1; i <= attNumber; i++) {
   const playerAnswer = prompt('Какое число я загадал?','');
    if(playerAnswer>randomNumber){
        alert(`Моё число меньше. Попробуй еще. Осталось ${attNumber -i}`)
    } else if (playerAnswer < randomNumber){
        alert(`Моё число больше. Попробуй еще. Осталось ${attNumber -i}`)
    } else {
        alert(`Это победа! Ты угадал с ${i} попыток`)
        return
    }  
}
alert(`Задача провалена.`)
}

game(MIN_VALUE, MAX_VALUE, ATTEMT, playerName, randomNumber)
