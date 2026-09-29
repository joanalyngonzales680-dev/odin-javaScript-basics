console.log("Hello")
function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber < 1/3){
        return "rock";
    } else if (randomNumber < 2/3){
        return "paper";
    } else {
        return "scissor";
    }
}



function getHumanChoice(){
    return prompt("Rock, Paper, or Scissor");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice === computerChoice){
        } else if ((humanChoice === "rock" && computerChoice === "scissor") 
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissor" && computerChoice === "paper")){
                humanScore++;
        } else {
            computerScore++;
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Your score: " + humanScore);
    console.log("computer Score: " + computerScore);

    if(humanScore > computerScore){
        console.log("You win! Congratulations!");
    } else if (humanScore < computerScore){
        console.log("Too Bad.... Computer Win!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();