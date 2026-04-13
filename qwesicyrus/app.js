const userInput = prompt("Choose between (Rock, Paper, Scissors) ").toLowerCase()
const arrOfChoice = ["rock", "paper", "scissors"]

const computerChoice = (choice, user) => {

    let randomChoice = Math.floor(Math.random() * 3)
    let computer = choice[randomChoice]

    // Checking if player choice matches computer choice

    if (user === computer) {
        console.log("Tie")
    } else if (user === "rock" && computer === "scissors") {
        console.log("You Win");
        
    } else if (user === "scissors" && computer === "paper") {
        console.log("You Win");
        
    } else if (user === "paper" && computer === "rock") {
        console.log("You Win");
        
    } else {
        console.log("You Lose");
        
    }

}

computerChoice(arrOfChoice, userInput)