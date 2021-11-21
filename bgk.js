let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const batu_div = document.getElementById("b");
const gunting_div = document.getElementById("g");
const kertas_div = document.getElementById("k");

// komputer
const x = document.querySelectorAll(".choice1");
console.log(x);
// const cbatu_div = document.getElementById("b1");
// const cgunting_div = document.getElementById("g1");
// const ckertas_div = document.getElementById("k1");

// Pemain
function getComputerChoice() {
  const choices = ["b", "g", "k"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter == "b") return "Batu";
  if (letter == "g") return "Gunting";
  return "Kertas";
}

// function newget() {
//   if (getComputerChoice == "b") {
//     cbatu_div.style.backgroundColor = "yellow";
//   }
// }

function win(userChoice, ComputerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smuser = "user".fontsize(3).sub();
  const smcomp = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userChoice)}${smuser} lawan  ${convert(
    ComputerChoice
  )} ${smcomp}. Menang!!`;
}

function lose(userChoice, ComputerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smuser = "user".fontsize(3).sub();
  const smcomp = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userChoice)}${smuser} lawan  ${convert(
    ComputerChoice
  )}${smcomp}. Kalah...!!`;
}

function draw(userChoice, ComputerChoice) {
  const smuser = "user".fontsize(3).sub();
  const smcomp = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convert(userChoice)}${smuser} sama  ${convert(
    ComputerChoice
  )}${smcomp}. Seri.....!!`;
}

function game(userChoice) {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "bg":
    case "gk":
    case "kb":
      win(userChoice, ComputerChoice);
      break;
    case "bk":
    case "gb":
    case "kg":
      lose(userChoice, ComputerChoice);
      break;
    case "bb":
    case "gg":
    case "kk":
      draw(userChoice, ComputerChoice);
      break;
  }
}

function main() {
  batu_div.addEventListener("click", function () {
    game("b");
  });

  gunting_div.addEventListener("click", function () {
    game("g");
  });

  kertas_div.addEventListener("click", function () {
    game("k");
  });
}

main();
