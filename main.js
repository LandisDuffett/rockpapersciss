let choices = ['rock', 'paper', 'scissors']

function play(playerChoice) {
  let compChoice = getCompChoice();
  if (playerChoice == compChoice) {
    alert("Tie! Choose again.");
  }
  else if (playerChoice == 'rock') {
    if (compChoice == 'paper') {
      alert("Computer Wins!");
    } else if (compChoice == 'scissors') {
      alert("You win!");
    }
  }
  else if (playerChoice == 'scissors') {
    if (compChoice == 'paper') {
      alert("You win!");
    } else if (compChoice == 'rock') {
      alert("Computer Wins!");
    }
  }
  else if (playerChoice == 'paper') {
    if (compChoice == 'rock') {
      alert("You win!");
    } else if (compChoice == 'scissors') {
      alert("Computer wins!");
    }

  }
}

function getCompChoice() {
  let num = Math.floor(Math.random() * choices.length);
  let choice = choices[num];
  return choice;
}