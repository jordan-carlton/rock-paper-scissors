function computerPlay() { 
    // Randomly returns either "Rock", "Paper" or "Scissors"
    var plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
    // Plays a single round of Rock Paper Scissors
    let result = ''
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = 'tie';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = 'won';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       result = 'won';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = 'won';
    } else {
        result = 'lost';
    }

    console.log(playerSelection, computerSelection, result)

    if (result === 'won') {
        console.log(`You won! ${playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1)} beats ${computerSelection}.`);
    } else if (result === 'lost') {
        console.log(`You lost! ${computerSelection.charAt(0).toUpperCase() + 
            computerSelection.slice(1)} beats ${playerSelection}.`);
    } else if (result === 'tie') {
        console.log(`You drew!`);
    }
    
    return result;
}



function game() {
    // Play a 5 round game that keeps score and reports a winner or loser at the end.
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        userChoice = prompt("Please pick a move");
        computerChoice = computerPlay();
        outcome = playRound(userChoice, computerChoice);

        if (outcome === 'won') {
            playerScore++;
        } else if (outcome === 'lost') {
            computerScore++;
        }
    }

    if (playerScore === computerScore) {
        return `Draw! You both scored ${playerScore}`;
    } else if (playerScore > computerScore) {
        return `You Won! Your score is ${playerScore}. Computer score is ${computerScore}`;
    } else {
        return `You Lost! Your score is ${playerScore}. Computer score is ${computerScore}`;
    }
}

console.log(game());
