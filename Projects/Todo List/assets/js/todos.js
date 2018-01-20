// click() only adds listeners for existing elements
// on() will add listeners for all potential future elements

// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();	// this "this" refers to the li which is the parent of this "span"
	});
	event.stopPropagation();	// stop the event from bubbling up
});

$("input[type= 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " + todoText + "</li>")
		console.log(todoText);
	};
});

$(".fa-plus").click(function(){
	$("input[type= 'text']").fadeToggle();
})




