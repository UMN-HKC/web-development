console.log("Print all odd numbers between 300 and 333");

var count = 300;
while(count <= 333)
{
	if(count%2 !== 0){
		console.log(count);
	}
	count++;
}

console.log("Print all numbers between -10 and 19");

var count = -10;
while(count <= 19){
	console.log(count);
	count++;
}

console.log("Print all even numbers between 10 and 40")

var num = 10;
while(num <= 40){
	console.log(num);
	num +=2;
}


console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var num = 5;
while(num <= 50)
{
	if((num % 5 === 0) && (num % 3 === 0)){
		console.log(num);		
	}
	num++;
}