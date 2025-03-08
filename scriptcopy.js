// Rock Paper Scissors Game
// For computerChoice, use a randomizer to determine if the computer chooses rock, paper or scissors
// For humanChoice, prompt the user for an answer (case insenstive). If it is not the answer, return invalid choice
// Compare computerChocie with humanChoice and see who wins
// The winner gets one point
// Each game is 5 rounds. Whoever has the most points after the game ends is the winnner



function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);

    switch(a) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}


const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

buttonPaper.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
            
buttonScissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


function playRound (humanChoice, computerChoice){
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        // humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!")
     } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        // computerScore++;
    }

    // console.log(`Score: You: ${humanScore} - Computer: ${computerScore}`)
}
