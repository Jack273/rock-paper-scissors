let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector('.score')

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}


function playGame (user) {
    computer = getComputerChoice();
    if (user === "rock" && computer === "rock"){
        return;
    }
    else if (user === "rock" && computer === "paper"){
        computerScore ++;
    }
    else if (user === "rock" && computer === "scissors"){
        playerScore ++;
    }
    else if (user === "paper" && computer === "paper"){
        return;
    }
    else if (user === "paper" && computer === "scissors"){
        computerScore ++;
    }
    else if (user === "paper" && computer === "rock"){
        playerScore ++;
    }
    else if (user === "scissors" && computer === "scissors"){
        return
    }
    else if (user === "scissors" && computer === "paper"){
        playerScore ++;
    }
    else if (user === "scissors" && computer === "rock"){
        computerScore ++;
    }
    
    scoreDiv.textContent = "The current score is " + playerScore + " for the player, and " + computerScore + " for the computer"

    if (playerScore ===5){
        scoreDiv.textContent = "You win"
    }
    else if (computerScore===5){
        scoreDiv.textContent = "Game over"
    }
}
const buttons = document.querySelectorAll('button')

// foreach used to iterate through all buttons
buttons.forEach((button) => {

    // for each button add click listener
    button.addEventListener('click', () => {
        playGame(button.className);
})})