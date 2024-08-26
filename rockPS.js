let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
    console.log("It's a tie! Both players chose " + player1 + ".");
} else if (player1 === "rock" && player2 === "scissors") {
    console.log("Player 1 wins! Rock beats Scissors.");
} else if (player1 === "scissors" && player2 === "paper") {
    console.log("Player 1 wins! Scissors beats Paper.");
} else if (player1 === "paper" && player2 === "rock") {
    console.log("Player 1 wins! Paper beats Rock.");
} else if (player2 === "rock" && player1 === "scissors") {
    console.log("Player 2 wins! Rock beats Scissors.");
} else if (player2 === "scissors" && player1 === "paper") {
    console.log("Player 2 wins! Scissors beats Paper.");
} else if (player2 === "paper" && player1 === "rock") {
    console.log("Player 2 wins! Paper beats Rock.");
} else {
    console.log("Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
}

// 