var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var goalColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = goalColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === goalColor){
			alert("Correct!");
		}
		else{
			alert("Wrong!");
		}
	});
}