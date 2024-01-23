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

function endGame() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
    if (playerWins > computerWins) {
        display.innerHTML = 'Player won.'
    } else {
        display.innerHTML = 'Computer won.'
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {

        playerWins++;
        display.innerHTML = `You win, ${playerSelection} beats ${computerSelection}.
                         <br>Player wins: ${playerWins}
                         <br>Computer wins: ${computerWins}`;

    } else if (computerSelection == "rock" && playerSelection == "scissors" || 
               computerSelection == "paper" && playerSelection == "rock" || 
               computerSelection == "scissors" && playerSelection == "paper") {

        computerWins++;
        display.innerHTML = `You lose, ${computerSelection} beats ${playerSelection}.
                         <br>Player wins: ${playerWins}
                         <br>Computer wins: ${computerWins}`;

    } else {
        display.innerHTML =`Draw.
                        <br>Player wins: ${playerWins}
                        <br>Computer wins: ${computerWins}`;
    }

    if (playerWins >= 5 || computerWins >= 5) {
        endGame();
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

