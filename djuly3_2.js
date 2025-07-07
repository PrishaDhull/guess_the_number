let randomNumber=Math.floor((Math.random()*100)+1)//gives random number from 0 to 100
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastGuess')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p= document.createElement('p')

console.log(randomNumber)  // +++++++++++++testing+++++++++++++++

let prevGuess=[]
let numGuess=0
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
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){      // to avoid -1 ... we could use 9 here... and use checkGuess(guess) 
        //  and display this game over message with another component
            displayGuess(guess)
            displayMessage(`Game Over! The random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('you guessed it right')
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Your number is too low')
    }else if(guess>randomNumber){
        displayMessage('Your number is too high')
    }
}

function displayGuess(guess){
    userInput.value=''   // resets value for another guess
    guessSlot.innerHTML+=`${guess}, `  // concats 
    numGuess++
    remaining.innerHTML=`${10-numGuess} `
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')   // needs key value pairs
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame"> Start a New Game<h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newButton=document.querySelector('#newGame')
    newButton.addEventListener('click', function(e){
        randomNumber=Math.floor((Math.random()*100)+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame=true
    })
}