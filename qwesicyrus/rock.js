// ACCESSING THE ELEMENTS IN THE DOM

const computerChoiceImage = document.getElementById("computer__choice");
const playerChoiceImage = document.getElementById("player__choice");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const playerBtn = document.querySelectorAll(".player__btn");

let playerChoiceValue = "";
let computerChoiceValue = "";
let score = 0;

const choice = {
  rock: "img/rock.png",
  paper: "img/paper.png",
  scissors: "img/scissors.png",
};

// LOOPING THROUGH THE PLAYERBTN AND ADDING EVENTLISTENER

playerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerChoiceValue = btn.value;
    computerChoice = getComputerChoice();

    playerChoiceImage.innerHTML = `<img src = "${choice[playerChoiceValue]}" />`;

    computerChoiceImage.innerHTML = `<img src = "${choice[computerChoiceValue]}" />`;

    displayResult();
  });
});

// GETTING THE COMPUTER CHOICE

const getComputerChoice = () => {
  const computer = ["rock", "paper", "scissors"];

  computerChoiceValue = computer[Math.floor(Math.random() * computer.length)];

  return computerChoiceValue;
};

// DISPLAYING GAME RESULTS

const displayResult = () => {

    // comparing player choice vlaue to computer choice value
    
  if (playerChoiceValue === computerChoiceValue) {
    resultEl.textContent = "Draw !";
  } else if (
    (playerChoiceValue === "rock" && computerChoiceValue === "scissors") ||
    (playerChoiceValue === "paper" && computerChoiceValue === "rock") ||
    (playerChoiceValue === "scissors" && computerChoiceValue === "paper")
  ) {
    resultEl.textContent = "You Won !";
    scoreEl.textContent = `Your Score: ${++score}`;
  } else {
    resultEl.textContent = "You Lost !";
  }
};
