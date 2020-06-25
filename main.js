let choices = ['rock', 'paper', 'scissors', 'lizard', 'Spock']
let playerTally = 0;
let compTally = 0;
let tieTally = 0;
let templateTie = `<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>`
let templatePlayerWins =
  let templateCompWins =

    function play(playerChoice) {
      let compChoice = getCompChoice();
      debugger
      if (playerChoice == compChoice) {
        bootbox.alert(`Computer also chooses ${compChoice} - Tie! Choose again.`);
        tieTally++;
      }
      else if (playerChoice == 'rock') {
        if (compChoice == 'paper') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        } else if (compChoice == 'scissors') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        }
        else if (compChoice == 'lizard') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        }
        else if (compChoice == 'Spock') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
      }

      else if (playerChoice == 'scissors') {
        if (compChoice == 'paper') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        } else if (compChoice == 'rock') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'lizard') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        }
        else if (compChoice == 'Spock') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
      }

      else if (playerChoice == 'paper') {
        if (compChoice == 'rock') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        } else if (compChoice == 'scissors') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'lizard') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'Spock') {
          alert(`Computer chooses ${compChoice} - You win!`);
          playerTally++;
        }
      }

      else if (playerChoice == 'Spock') {
        if (compChoice == 'paper') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        } else if (compChoice == 'scissors') {
          alert(`Computer chooses ${compChoice} - You Win!`);
          playerTally++;
        }
        else if (compChoice == 'lizard') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'rock') {
          alert(`Computer chooses ${compChoice} - You Win!`);
          playerTally++;
        }
      }

      else if (playerChoice == 'lizard') {
        if (compChoice == 'paper') {
          alert(`Computer chooses ${compChoice} - You Win!`);
          playerTally++;
        } else if (compChoice == 'scissors') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'rock') {
          alert(`Computer chooses ${compChoice} - Computer Wins!`);
          compTally++;
        }
        else if (compChoice == 'Spock') {
          alert(`Computer chooses ${compChoice} - You Win!`);
          playerTally++;
        }
      }
      drawScoreboard();
    }

function getCompChoice() {
  let num = Math.floor(Math.random() * choices.length);
  let choice = choices[num + 1];
  return choice;
}

function drawScoreboard() {
  let template = "";
  template += `<row class="m-2"><h4 class="text-center">
            <span class="mr-3">You:
                ${playerTally}</span>
            <span class="ml-3">Computer: ${compTally}</span></h4><h4 class="text-center">
            Ties:
                ${tieTally}</h4></row>
        `
  document.getElementById("tally").innerHTML = template
}

drawScoreboard()