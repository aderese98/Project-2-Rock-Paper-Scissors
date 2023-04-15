let btns = document.querySelectorAll('#player-choices');
let updates = document.querySelector('.console');
let winnerUpdate = document.querySelector('.winner');
let playerScore = 0, cpuScore = 0;

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        let val = e.target.innerHTML;
        let playerChoice;
        let compChoice = getComputerChoice().toUpperCase();
        let playerWon = "";
        let properVal = val == 'Rock' || val == 'Paper' || val == 'Scissors';
        if(properVal){
            playerChoice = val.toUpperCase();
            updates.childNodes[1].innerHTML = "You chose: " + playerChoice;
            updates.childNodes[3].innerHTML = "CPU chose: " + compChoice;
        }
        if(playerChoice == compChoice){
            playerWon = "TIE";
        }
        if(playerChoice == 'ROCK'){
            if(compChoice == 'PAPER'){
                playerWon = "Computer";
                cpuScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
            else if(compChoice == 'SCISSORS'){
                playerWon = "You";
                playerScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
        }
        if(playerChoice == 'PAPER'){
            if(compChoice == 'SCISSORS'){
                playerWon = "Computer";
                cpuScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
            else if(compChoice == 'ROCK'){
                playerWon = "You";
                playerScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
        }
        if(playerChoice == 'SCISSORS'){
            if(compChoice == 'ROCK'){
                playerWon = "Computer";
                cpuScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
            else if(compChoice == 'PAPER'){
                playerWon = "You";
                playerScore++;
                updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            }
        }
        if(playerWon != "TIE" && properVal)
            winnerUpdate.innerHTML = playerWon + " Won!";
        else
            winnerUpdate.innerHTML = playerWon;
        
        if(playerScore == 5 || cpuScore == 5) {
            if(playerScore == 5)
                winnerUpdate.innerHTML = "Congrats! " + playerWon + " won the game! Scores will be reset...";
            else if(cpuScore == 5)
                winnerUpdate.innerHTML = playerWon + " won the game. Better luck next time! Scores will be reset...";
            playerScore = 0;
            cpuScore = 0;
            updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
            updates.childNodes[5].innerHTML = "Score | You: " + playerScore +
                " CPU: " + cpuScore;
        }
        console.log(winnerUpdate.innerHTML);
    })
})

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 
                              choices.length);
    let randomChoice = choices[randomNum];
    return randomChoice;
}

