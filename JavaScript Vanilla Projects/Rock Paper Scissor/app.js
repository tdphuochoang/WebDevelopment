/* Catch the Dom */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.querySelector(".reset-button");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " beats " +
    convertToWord(computerChoice) +
    smallCompWord +
    ". You win!";
  userChoice_div.classList.add("green-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " loses to " +
    convertToWord(computerChoice) +
    smallCompWord +
    ". You lost! ";
  userChoice_div.classList.add("red-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " equals " +
    convertToWord(computerChoice) +
    smallCompWord +
    ". Its a draw! ";
  userChoice_div.classList.add("gray-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function reset() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
  reset_div.addEventListener("click", () => reset());
}

main();
