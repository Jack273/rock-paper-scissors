let playerChoice = prompt("Make your choice: rock, paper or scissors").toLowerCase();

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

console.log(playerChoice)
console.log(typeof(playerChoice))
console.log(getComputerChoice())

function playGame () {
    computer = getComputerChoice();
    user = playerChoice;
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
