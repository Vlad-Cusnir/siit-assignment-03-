
function getPcInput() {
    const correctInput = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * correctInput.length);
    return correctInput[randomIndex];
}


function whoWillWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "you win!";
    } else {
        return "Machines wins!";
    }
}

function gamePlay(userInput) {
    const userChoice = getValidInput(userInput);

    if (!userChoice) {
        return "Invalid input. Please choose rock, paper, or scissors.";
    }

    const computerChoice = getComputerChoice();
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    return whoWillWin(userChoice, computerChoice);
}

console.log(gamePlay("RoCk"));  
