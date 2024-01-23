function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    
    let choice;
    switch (randInt) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    
    return choice;
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {

        display.textContent = `You win, ${playerSelection} beats ${computerSelection}.`;
        playerWins++;

    } else if (computerSelection == "rock" && playerSelection == "scissors" || 
                computerSelection == "paper" && playerSelection == "rock" || 
                computerSelection == "scissors" && playerSelection == "paper") {

        display.textContent = `You lose, ${computerSelection} beats ${playerSelection}.`;
        computerWins++;

    } else {
        display.textContent =`Draw.`;
    }
}

let playerWins = 0;
let computerWins = 0;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});