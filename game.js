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

function playRound(playerSelection, computerSelection) {
    let roundWinner;

    if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" || 
        playerSelection == "scissors" && computerSelection == "paper") {

        roundWinner = "player";

    } else if (computerSelection == "rock" && playerSelection == "scissors" || 
                computerSelection == "paper" && playerSelection == "rock" || 
                computerSelection == "scissors" && playerSelection == "paper") {

        roundWinner = "computer";

    } else {
        roundWinner = "none";
    }

    return roundWinner;
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
    let roundNum = 1;
    let playerWins = 0;
    let computerWins = 0;
    let playerSelection;
    let computerSelection;
    let playerSelectionFormatted;
    let computerSelectionFormatted;

    while (playerWins < 3 && computerWins < 3) {
        do {
            playerSelection = prompt("Choose rock, paper, or scissors");
            playerSelection = playerSelection.toLowerCase();
        } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
        
        computerSelection = getComputerChoice();

        roundWinner = playRound(playerSelection, computerSelection);

        playerSelectionFormatted = capitalizeFirstLetter(playerSelection);
        computerSelectionFormatted = capitalizeFirstLetter(computerSelection);
        
        switch (roundWinner) {
            case ("player"):
                console.log(`You win round ${roundNum}! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`);
                playerWins++;
                roundNum++;
                break;
            case ("computer"):
                console.log(`You lose round ${roundNum}! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`);
                computerWins++;
                roundNum++;
                break;
            case ("none"):
                console.log(`Tie! Choose again`);
                break;
        }
    }

    if (playerWins > computerWins) {
        console.log(`You win the best-of-five game!`);
    } else {
        console.log(`You lose the best-of-five game!`);
    }
}

game();