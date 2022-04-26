var playerOne = prompt("player 1 Rock, Paper or Scissors?: ");
var playerTwo = prompt("player 2 Rock, Paper or Scissors?: ");

var game = document.getElementById("game");

function playGame(choice1, choice2){
    if(choice1 === choice2) {
        return "The result is a tie!"; 
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return"rock wins";
        }
        else{
            return "paper wins";
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins";
        }
        else{
            if(choice2 === "scissors") {
                return "scissors wins";
            }
        }
    }
    else if (choice1 === "scissors"){
        if(choice2 === "rock") {
            return "rock wins";
        }
        else{
            if(choice2 === "paper") {
                return "scissors wins";
            }
        }
    }
};

var result = playGame(playerOne,playerTwo);
game.innerHTML = result;





