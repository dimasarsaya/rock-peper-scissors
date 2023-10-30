const buttons = document.querySelectorAll('button'); // Select all buttons
const resultEl = document.getElementById("result"); // Select result

const playerScoreEl = document.getElementById("user-score"); //Select user score
const computerScoreEl = document.getElementById("computer-score"); //Select computer scorte

let playerScore = 0;  //Default score 0
let computerScore = 0;

buttons.forEach(button => {                             // Button click function
    button.addEventListener('click', () => {
        const result = playround(button.id, computerPlay());
        resultEl.textContent = result;
    });
});


function computerPlay() {                   // Computer function generated play
    const choices = ["rock", "paper", "scissors",];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playround(playerSelection, computerSelection) {    //playround method function
    if (playerSelection === computerSelection) {

        return "It's Tie!";
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")  || (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}





