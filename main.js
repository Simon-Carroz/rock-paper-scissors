// declaring variables for score
let computerCounter = 0;
let playerCounter = 0;
let tieCounter = 0;


// determines computer play
const computerChoice = () => {

    //uses a random number from 1 to 3
    const randomN = Math.floor(Math.random() * 3) + 1;
    
    //returns play based on random number
    if (randomN == 1) {return 'Rock'}
    else if (randomN == 2) {return 'Paper'}
    else {return 'Scissors'}
}


// determines winner
const playGame = (player,computer) => {
    
    // declares objects with information about game result
    const playerWon = {
        'winner': 'player',
        'player_move' : player,
        'computer_move' : computer,
    }

    const computerWon = {
        'winner': 'computer',
        'player_move' : player,
        'computer_move' : computer,
    }

    const tie = {
        'winner': 'tie',
        'player_move' : player,
        'computer_move' : computer,
    }


    // based on player and computer play returns object with game info
    if (player == computer) {return tie}

    else if (player == 'Rock' && computer == 'Scissors') {return playerWon}
    else if (player == 'Paper' && computer == 'Rock') {return playerWon}
    else if (player == 'Scissors' && computer == 'Paper') {return playerWon}

    else {return computerWon}
}


// displays message of match result
const displayResult = (result) => {

    // declares variable that will hold the message
    const displayResultMatch = document.querySelector('#display-result')

    // delete any existing messages
    while (displayResultMatch.firstChild) {
        displayResultMatch.removeChild(displayResultMatch.firstChild)
    }

    // creates element to hold match message
    const resultMessage = document.createElement('p')

    //adds the match message to the element
    resultMessage.textContent = result

    //appends element with match result
    displayResultMatch.appendChild(resultMessage)

    //declares variables for elements that hold score
    const computerScoreDisplay = document.querySelector('#computer-score')
    const playerScoreDisplay = document.querySelector('#player-score')
    const tiesScoreDisplay = document.querySelector('#ties-score')

    //display in dom the current score
    computerScoreDisplay.textContent = computerCounter
    playerScoreDisplay.textContent = playerCounter
    tiesScoreDisplay.textContent = tieCounter
}


//creates the winning message based on game info
const winningMessage = (winner, playerMove, computerMove) => {

    //declares variables with each message based on game result
    playerWonMsg = `Player won! ${playerMove} Beats ${computerMove}`
    computerWonMsg = `Computer won! ${computerMove} Beats ${playerMove}`
    tiemsg = `TIE! Both Players used ${playerMove}`

    // returns message based on winner and adds score
    if (winner == 'player') {
        playerCounter += 1
        return playerWonMsg
        
    }
    else if (winner == 'computer') {
        computerCounter += 1
        return computerWonMsg
    }
    else {
        tieCounter += 1
        return tiemsg
    }
} 




const rockButton = document.querySelector('#player-rock')
rockButton.addEventListener('click', () => {

    const rockButton = document.querySelector('#player-rock')
    const rockOption = rockButton.textContent

    const gameResult = playGame(rockOption, computerChoice())

    const winner = Object.values(gameResult)[0]
    const playerMove = Object.values(gameResult)[1]
    const computerMove = Object.values(gameResult)[2]

    const finalMessage = winningMessage(winner, playerMove, computerMove)

    displayResult(finalMessage)

})





const paperButton = document.querySelector('#player-paper')
paperButton.addEventListener('click', () => {

    
    const paperButton = document.querySelector('#player-paper')
    const paperOption = paperButton.textContent

    const gameResult = playGame(paperOption, computerChoice())

    const winner = Object.values(gameResult)[0]
    const playerMove = Object.values(gameResult)[1]
    const computerMove = Object.values(gameResult)[2]

    const finalMessage = winningMessage(winner, playerMove, computerMove)

    displayResult(finalMessage)


})


const scissorsButton = document.querySelector('#player-scissors')
scissorsButton.addEventListener('click', () => {

    const scissorsButton = document.querySelector('#player-scissors')
    const scissorsOption = scissorsButton.textContent

    const gameResult = playGame(scissorsOption, computerChoice())

    const winner = Object.values(gameResult)[0]
    const playerMove = Object.values(gameResult)[1]
    const computerMove = Object.values(gameResult)[2]

    const finalMessage = winningMessage(winner, playerMove, computerMove)

    displayResult(finalMessage)

})


