function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 
                              choices.length);
    let randomChoice = choices[randomNum];
    return randomChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Type Rock, Paper, or Scissors.");
    return playerChoice;
}

function playGame(playerChoice, compChoice){
    playerChoice = getPlayerChoice().toUpperCase();
    compChoice = getComputerChoice().toUpperCase();
    let playerWon = "";
    if(playerChoice == compChoice){
        alert('You both chose ' + playerChoice +
              ", It's a Tie!");
        playerWon = "TIE";
    }
    if(playerChoice == 'ROCK'){
        if(compChoice == 'PAPER'){
            alert('Computer chose Paper, You Lost!')
        }
        else if(compChoice == 'SCISSORS'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    if(playerChoice == 'PAPER'){
        if(compChoice == 'SCISSORS'){
            alert('Computer chose Paper, You Lost!')
        }
        else if(compChoice == 'ROCK'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    if(playerChoice == 'SCISSORS'){
        if(compChoice == 'ROCK'){
            alert('Computer chose Paper, You Lost!')
        }
        else if(compChoice == 'PAPER'){
            alert('Computer chose Scissors, You Won!');
            playerWon = "PLAYER";
        }
    }
    return playerWon;
}

function game(){
    let playerWins = 0;
    let compWins = 0;
    for(let i =0; i < 5; i++){
        if(playGame() == "PLAYER"){
            playerWins++;
        }
        else{
            compWins++;
        }
    }
}