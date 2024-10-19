// STEP - 2: Get computer choice function
function getComputerChoice() {
    // Randomly generate a number (1,2,3) using Math.Random()
    choice_number = Math.floor(Math.random() * 3);
    // Set the value for the number (Rock, Paper, Scissor) using conditionals and store in a variable "choice"
    let choice;
    if (choice_number == 0) {
        choice = "Rock"
    } else if (choice_number == 1) {
        choice = "Paper"
    } else {
        choice = "Scissor"
    };
    // Return "choice" variable
    return choice;
};

// STEP - 3: Get human choice function 

function getHumanChoice(event) {
    let choice;
    if (event.target.id == 'rock') {
        choice = "Rock"
    } else if (event.target.id == 'paper') {
        choice = "Paper"
    } else if (event.target.id == 'scissor') { 
        choice = "Scissor"
    }
    return choice;
}

// Declare score variables
let H_Score = 0;
let C_Score = 0;

let message = document.querySelector('.messages');

// STEP - 5: Play a round logic
function playRound(humanChoice, computerChoice) {
    let humanScore = document.querySelector('#humanScore');
    let computerScore = document.querySelector('#computerScore');
    // Create conditionals to check who gets the point
    if (humanChoice === computerChoice) {
        message.innerHTML = `Both selected ${humanChoice}. It's a draw`;
    } else if ((humanChoice == 'Rock' && computerChoice == 'Scissor') ||
        (humanChoice == 'Paper' && computerChoice == 'Rock') ||
        (humanChoice == 'Scissor' && computerChoice == 'Paper')) {
        // add score for human
        H_Score++;
        humanScore.innerHTML = `Your Score: ${H_Score}`;
        message.innerHTML = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        // add score for computer
        C_Score++;
        computerScore.innerHTML = `Computer's Score: ${C_Score}`;
        message.innerHTML = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    };
}

// Step 6: Play 5 rounds logic
function playGame(event) {
    // Create variables for choice
    let humanSelection = getHumanChoice(event);
    console.log(humanSelection);
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)

    // Output the scores and check who wins (using conditionals)
    if (H_Score == 5) {
        message.innerHTML = "Congratulations! You win!"
        H_Score = 0;
        C_Score = 0;
        document.querySelector('#humanScore').innerHTML = 'Your Score: 0'
        document.querySelector('#computerScore').innerHTML = 'Computer\'s Score: 0'
    } else if (C_Score == 5) {
        message.innerHTML = "Better luck next time! Computer wins!"
        H_Score = 0;
        C_Score = 0;
        document.querySelector('#humanScore').innerHTML = 'Your Score: 0'
        document.querySelector('#computerScore').innerHTML = 'Computer\'s Score: 0'
    }
}

let humanChoice = document.querySelector('.buttons');
humanChoice.addEventListener('click', playGame);