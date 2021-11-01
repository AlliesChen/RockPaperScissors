
// Click any button to start the game
const btns = document.querySelectorAll('button[id]');

// Assign an event listener to each button
btns.forEach(btn => {
    btn.addEventListener('click', () => { 
        playRound(btn.id);
    });
});

let playerScore = 0;

// div for displaying game messages
const r_block = document.querySelector('#result_block');
const scoreBoard = document.createElement('div');
scoreBoard.textContent = `Player Score: ${playerScore}`;
r_block.appendChild(scoreBoard);
const roundMsg = document.createElement('p');
r_block.appendChild(roundMsg);

// prints the round resoult
function playRound(player) {
    let computerSelection = computerPlay();
    // list the conditions and results base on the players' choices
    if (player == "rock" && computerSelection == "scissors" ||
        player == "paper" && computerSelection == "rock" ||
        player == "scissors" && computerSelection == "paper") {
        roundMsg.textContent = `You Win! ${player} beats ${computerSelection}`;
        playerScore++;
    } else if (player == computerSelection) {
        roundMsg.textContent = `Tie! You chose ${player} and your opponent chose ${computerSelection} as well`;
    } else {
        roundMsg.textContent = `You Lose! ${player} cannot beat ${computerSelection}`;
    }
    checkScore();
}

// a founction return rock, paper, scissors randomly by value range
function computerPlay() {
    let value = Math.floor(Math.random() * 100);
    if (value < 33) {
        return "rock";
    } else if (value < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Show message when the player gets 5 scores 
function checkScore() {
    if (playerScore == 5) {
        scoreBoard.textContent = `Player Score: ${playerScore}, you are a winner!`;
        playerScore = 0;
    } else {
        scoreBoard.textContent = `Player Score: ${playerScore}`;
    }
}