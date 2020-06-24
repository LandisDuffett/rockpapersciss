let choices = ['rock', 'paper', 'scissors']
let playerTally = 0;
let compTally = 0;

function play(playerChoice) {
  let compChoice = getCompChoice();
  debugger
  if (playerChoice == compChoice) {
    alert("Tie! Choose again.");
  }
  else if (playerChoice == 'rock') {
    if (compChoice == 'paper') {
      alert("Computer Wins!");
      compTally++;
    } else if (compChoice == 'scissors') {
      alert("You win!");
      playerTally++;
    }
  }
  else if (playerChoice == 'scissors') {
    if (compChoice == 'paper') {
      alert("You win!");
      playerTally++;
    } else if (compChoice == 'rock') {
      alert("Computer Wins!");
      compTally++;
    }
  }
  else if (playerChoice == 'paper') {
    if (compChoice == 'rock') {
      alert("You win!");
      playerTally++;
    } else if (compChoice == 'scissors') {
      alert("Computer wins!");
      compTally++;
    }

  }
}

function getCompChoice() {
  let num = Math.floor(Math.random() * choices.length);
  let choice = choices[num];
  return choice;
}

function drawScoreboard() {
  let template = "";
  template += `
         <div class="d-flex space-between">
            <span>You:
                ${playerTally}
            </span>
            <span>Computer: ${compTally}</span>
        </div>
        `
}

document.getElementById("tally").innerHTML = template
}


drawScoreboard()