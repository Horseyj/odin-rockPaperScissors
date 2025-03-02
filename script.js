// Rock Paper Scissors Game
// For computerChoice, use a randomizer to determine if the computer chooses rock, paper or scissors
// For humanChoice, prompt the user for an answer (case insenstive). If it is not the answer, return invalid choice
// Compare computerChocie with humanChoice and see who wins
// The winner gets one point
// Each game is 5 rounds. Whoever has the most points after the game ends is the winnner


// function getComputerChoice() {
//     const math = Math.random();

//     if (math < 0.33) { 
//         return computerChoice = "rock"
//     } else if (math > 0.66) {
//         return computerChoice = "paper"
//     } else {
//         return computerChoice = "scissors"
//     } 
// }

function getComputerChoice() {
    let a = (Math.floor(Math.random() * 3));

    switch(a) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?","");
    
    while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice! Please enter rock, paper or scissors");
    }

    return humanChoice;

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } 
        
        else if (humanChoice == computerChoice) {
            console.log(`Tie! ${humanChoice} ties with ${computerChoice}.`)
        } 
        
        else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++
        }

        console.log(`Score: You: ${humanScore} - Computer: ${computerScore}`)
    }

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore>computerScore) {
        console.log("Game over. Congrats. You win this game!")
    } 
    
    else if (humanScore<computerScore) {
        console.log("Game over.Better luck next time!")
    } 
    
    else {
        console.log("Game over. Draw!")
    }
}
    
