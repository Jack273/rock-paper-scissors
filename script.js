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
    }
    else if (user === "rock" && computer === "scissors"){
        console.log("You win, rock beats scissors")
    }
    else if (user === "paper" && computer === "paper"){
        console.log("its a tie, both paper")
    }
    else if (user === "paper" && computer === "scissors"){
        console.log("You lose, scissors beats paper")
    }
    else if (user === "paper" && computer === "rock"){
        console.log("You win, paper beats rock")
    }
    else if (user === "scissors" && computer === "scissors"){
        console.log("its a tie, both scissors")
    }
    else if (user === "scissors" && computer === "paper"){
        console.log("You win, scissors beats paper")
    }
    else if (user === "scissors" && computer === "rock"){
        console.log("You lose, rock beats scissors")
    }
    

    else {
        console.log("tes")
    }
    


}
const buttons = document.querySelectorAll('button')

// foreach used to iterate through all buttons
buttons.forEach((button) => {

    // for each button add click listener
    button.addEventListener('click', () => {
        playGame(button.className);
})})