var age = Number(prompt("Enter your age: "));
if(age < 0)
{
	console.log("Invalid age input!");
}
else if(age%2 !=0)
{
	if(age === 21)
	{
		console.log("happy 21st birthday!");
		console.log("Your age is odd!");
	}
	else 
	{
		console.log("Your age is odd!");
	}
}
if(age%Math.sqrt(age)===0)
{
	console.log("Your age is a perfect sqaure!")
}

