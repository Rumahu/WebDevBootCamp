var allLis = document.querySelectorAll("li");

for(var i= 0; i < allLis.length; i++){
	allLis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
	allLis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});
	allLis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}


