function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 
                              choices.length);
    let randomChoice = choices[randomNum];
    return randomChoice;
}

function getPlayerChoice(){
    return playerChoice;
}

function playGame(playerChoice, compChoice){
    playerChoice = getPlayerChoice().toUpperCase();
    compChoice = getComputerChoice().toUpperCase();
    let playerWon = "";
    if(playerChoice == compChoice){
        alert('You both picked ' + playerChoice +
              ", It's a Tie!");
        playerWon = "TIE";
    }
    if(playerChoice == 'ROCK'){
        if(compChoice == 'PAPER'){
            alert('Computer chose Paper, You Lost!');
            playerWon = "COMP";
        }
        else if(compChoice == 'SCISSORS'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    if(playerChoice == 'PAPER'){
        if(compChoice == 'SCISSORS'){
            alert('Computer chose Paper, You Lost!');
            playerWon = "COMP";
        }
        else if(compChoice == 'ROCK'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    if(playerChoice == 'SCISSORS'){
        if(compChoice == 'ROCK'){
            alert('Computer chose Paper, You Lost!');
            playerWon = "COMP";
        }
        else if(compChoice == 'PAPER'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    return playerWon;
}