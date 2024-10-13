// Generates a random option between rock, paper & scissors
function computerOption() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to validate user input 
function getValidInput(input) {
    const regex = /^(rock|paper|scissors)$/i; // Regular expression for valid inputs
    return regex.test(input) ? input.toLowerCase() : null; // Return lowercase input or null for invalid input
}

// Runs a new round of rock-paper-scissors game
function newRound() {
    console.log('');
    console.log(`NEW ROUND!`);

    const uChoice = prompt(`Input your choice: rock, paper, or scissors`);

    // Validate user input
    const validInput = getValidInput(uChoice);

    if (validInput) {
        const cChoice = computerOption();
        const result = detectWinner(validInput, cChoice); 
        console.log(`User's choice: ${validInput}`);
        console.log(`Computer's choice: ${cChoice}`);
        console.log(result);
    } else {
        console.error(`Invalid input: ${uChoice}`);
    }
}

/**
 * Function to detect the winner
 * The function returns one of the messages: "User wins!" / "Computer wins!" / "It's a tie!"
 * RULES:
 *     paper beats rock
 *     rock beats scissors
 *     scissors beats paper
 */
function detectWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "User wins!";
    } else {
        return "Computer wins!";
    }
}

newRound();
