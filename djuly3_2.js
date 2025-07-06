const randomNumber=parseInt((Math.round()*100)+1)//gives random number from 0 to 100
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastGuess')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

let prevGuess=[]
let numGuess=1
let playGame=true // used in almost all games 

if(playGame){              // takes the event and sends the value to the functions
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){

}