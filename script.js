// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Get references to DOM elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

// Function to handle a draw game
const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // User wins the round
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // Computer wins the round
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main function to play the game
const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${compChoice}`);

  if (userChoice === compChoice) {
    // Handle draw
    drawGame();
  } else {
    // Determine if the user wins
    let userWin = false;

    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      userWin = true;
    }

    console.log(`User wins: ${userWin}`);
    // Show the winner and update the scores
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listener for user choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

