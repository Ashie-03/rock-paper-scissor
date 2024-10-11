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
function getHumanChoice() {
    // Get choice from user from user and convert to number
    choice_number = parseInt(prompt("Select a number: \n1 = 'Rock' \n2 = 'Paper' \n3 = 'Scissor'"))
    // Set the value for the number (Rock, Paper, Scissor) using conditionals and store in a variable "choice"
    let choice;
    if (choice_number == 1) {
        choice = "Rock"
    } else if (choice_number == 2) {
        choice = "Paper"
    } else { //Any number other 1,2 will return this. 
        choice = "Scissor"
    };
    // Return "choice" variable
    return choice;
}

// STEP - 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// STEP - 5: Play a round logic
function playRound(humanChoice, computerChoice) {
    // Create conditionals to check who gets the point
    if (humanChoice === computerChoice) {
        console.log(`Both selected ${humanChoice}. It's a draw`);
    } else if ((humanChoice == 'Rock' && computerChoice == 'Scissor') ||
        (humanChoice == 'Paper' && computerChoice == 'Rock') ||
        (humanChoice == 'Scissor' && computerChoice == 'Paper')) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
    };
}

// Step 6: Play 5 rounds logic
function playGame() {
    // Create variables for choice
    let humanSelection;
    let computerSelection;

    // For loop to play each round (5 times)
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        game = playRound(humanSelection,computerSelection)
    }

    // Output the scores and check who wins (using conditionals)
    console.log(`Scores \nHuman: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins!")
    } else {
        console.log("Match")
    }
}

game = playGame();
console.log(game);