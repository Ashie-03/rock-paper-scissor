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

// Console.log to check output
chosen = getComputerChoice();
console.log(chosen);

// STEP - 3: Get human choice function 
function getHumanChoice() {
    chosen_number = parseInt(prompt("Select a number: \n1 = 'Rock' \n2 = 'Paper' \n3 = 'Scissor'"))
}