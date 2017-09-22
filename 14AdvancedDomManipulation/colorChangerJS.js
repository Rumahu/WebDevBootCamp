var button = document.querySelector("button");

// Old way
/* 
var isBlue = false;
button.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(){
	if(isBlue){
		document.body.style.background = "white";
	}
	else{
		document.body.style.background = "#4286f4";
	}
	isBlue = !isBlue;
} */

// New way toggling the "blue" class on body.

button.addEventListener("click", function(){
	document.body.classList.toggle("blue");
});