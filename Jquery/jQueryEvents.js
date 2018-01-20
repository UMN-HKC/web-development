different demos for practicing jQuery events

$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
});

$("input").keypress(function(event){
	if(event.which === 13){
		alert("You hit enter!");
	}
});

$("h1").on("click", function(){
	$(this).css("color", "purple");
});

$("input").on("keypress", function(){
	console.log("keypressed!");
})

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bolder")
})
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal")
})


