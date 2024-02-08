function playerSelection(choice) {

    let validOptions = ['rock', 'paper', 'scissors']

    let errorMessage = `Sorry, but your answer should be either of ${validOptions} and ${choice} is not valid`

    let playerChoice = choice.toLowerCase()

    if (validOptions.includes(playerChoice)) {
        return playerChoice
    } else {throw new Error(errorMessage)}
}

function computerChoice() {
    let choices = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissors'
    };

    let option = Math.floor(Math.random() * 3) + 1;

    return choices[option]
};

const playerRound = playerSelection(prompt("Rock, Paper, Scissors. SHOOT!"))

const computerRound = computerChoice()

function playRound(playerSelection, computerSelection) {

    const playerWon = `Player won! ${playerSelection} beats ${computerSelection}`
    const computerWon = `Computer won! ${computerSelection} beats ${playerSelection}`
    const tie = `TIE!! both players used ${computerSelection}`

    if (playerSelection === computerSelection) {
        return tie
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWon
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWon
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWon
    } else {return computerWon}

}

console.log(playRound(playerRound, computerRound))