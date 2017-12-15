setTimeout(function() {

	var todos = [];

	var input = prompt("What would you like to do?");

	while(input !== "quit"){
		if(input === "list"){
			// todos.forEach(function(todo){
			// 	console.log(todos.indexOf(todo) + " : " + todo);
			// });
			list();
		}
		else if(input === "new"){
			addTodo();
		}
		else if(input === "delete"){
			deleteTodo();
		}

		input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP");

	function addTodo(){
		todos.push(prompt("Add to your todo list:"));
		console.log("Added Todo");
	}

	function list(){
		console.log("*************");
		todos.forEach(function(todo,i)
			{console.log(i + " : " + todo);
		});
		console.log("*************");
	}

	function deleteTodo(){
		// var index = prompt("Enter index of todo to delete");
		// todos.splice(index,1);
		todos.splice(Number(prompt("Enter index of todo to delete")),1);
		console.log("Deleted Todo");
	}       
 
}, 200);

