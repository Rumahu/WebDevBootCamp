// Toggle if an li item is completed or not
$('li').on("click", function(){
	$(this).toggleClass("completed");
});

// Deletes list item upon clicking on the "X" span
$('span').on("click", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
