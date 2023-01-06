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
        console.log("its a tie, both rock")
    }
    else if (user === "rock" && computer === "paper"){
        console.log("You lose, paper beats rock")
        computerScore ++;
    }
    else if (user === "rock" && computer === "scissors"){
        console.log("You win, rock beats scissors")
        playerScore ++;
    }
    else if (user === "paper" && computer === "paper"){
        console.log("its a tie, both paper")
    }
    else if (user === "paper" && computer === "scissors"){
        console.log("You lose, scissors beats paper")
        computerScore ++;
    }
    else if (user === "paper" && computer === "rock"){
        console.log("You win, paper beats rock")
        playerScore ++;
    }
    else if (user === "scissors" && computer === "scissors"){
        console.log("its a tie, both scissors")
    }
    else if (user === "scissors" && computer === "paper"){
        console.log("You win, scissors beats paper")
        playerScore ++;
    }
    else if (user === "scissors" && computer === "rock"){
        console.log("You lose, rock beats scissors")
        computerScore ++;
    }
    else {
        console.log("tes")
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