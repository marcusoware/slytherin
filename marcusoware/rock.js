
// rock , paper ,scissor ;

// condition

// rock beat scissor  win will always be rock
// scissor beat paper win will always be scissors
// paper beats rock  win will always be paper 
// if it is same it a draw
// anyone who wins 2 times wins becos it just goes for 3 times;

// we will need some functon to create the logics;

// state variables 
let score = 0; 
let  scores = [];  //record each score or winer 
let  result = "";  // will record the last stuff u pushed
let computerChoice = ""; 
let playerChoice ="";
let choices = ["rock","paper","scissors"];

// function to start the game 
function start() {

    // get players choice
    for(let i = 0 ; i < 3 ; i++) {
        playerChoice = prompt("Rock paper scissor .... !!!!!! ");
        //slicing and indexing 
        computerChoice =choices[Math.floor(Math.random() * 2)];
        console.log(playerChoice,computerChoice) 
            
        // condition 
        if(playerChoice == "rock" && computerChoice== "paper") {
            console.log("paper won!")
        }
        else if (playerChoice == "scissors"  && computerChoice=="rock") {
        }
        else if (playerChoice == "paper" && computerChoice=="scissors") {
            console.log("scissors won!!!")
        }else {
            console.log("Rock won !!!!")
            console.log('tie')
        }
    }
    // to be implemented as assignment . 
    // add more conditions
    // check for user's input 
    // If you can seperate the logic .
}
start()
// function to announce the winner 
function winner() {
    // to be implemented
}

// function to record the scores
function scoreboard() {
    // to be implemented
}