function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
	if(num ===1 || num ===0){
		return 1;
	}
	else{
		return num * factorial(num - 1);
	}
}

function kebabToSnake(s){
	return s.replace("-","_");
}