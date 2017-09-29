// Toggle if an li item is completed or not
$('ul').on('click', 'li', function(){
	$(this).toggleClass("completed");
});

// Deletes list item upon clicking on the "X" span
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type=text]').keypress(function(pressedKey){
	if(pressedKey.which === 13){
		var todoText = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});