var playerOneButton = document.querySelector("#p1");
var playerTwoButton = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var playerOneDisplay = document.querySelector("#p1Display");
var playerTwoDisplay = document.querySelector("#p2Display");
var scoreInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;

// The two following event listeners can be refactored better! See later lessons for examples
playerOneButton.addEventListener("click", function(){
	if(!gameOver){
		playerOneScore++;
		playerOneDisplay.textContent = playerOneScore;
		if(playerOneScore === winningScore){
			playerOneDisplay.classList.add("winner");
			gameOver = true;
		}
	}
});

playerTwoButton.addEventListener("click", function(){
	if(!gameOver){
		playerTwoScore++;
		playerTwoDisplay.textContent = playerTwoScore;
		if(playerTwoScore === winningScore){
			playerTwoDisplay.classList.add("winner");
			gameOver = true;
		}
	}
		
});

resetButton.addEventListener("click", reset);

function reset(){
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneDisplay.textContent = 0;
	playerTwoDisplay.textContent = 0;
	playerOneDisplay.classList.remove("winner");
	playerTwoDisplay.classList.remove("winner");
	gameOver = false;
}

scoreInput.addEventListener("change", function(){
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = this.value;
	reset();
});