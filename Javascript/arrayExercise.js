function printReverse(item){
	for(var i = item.length-1; i >= 0; i--){
		console.log(item[i]);
	}
}

function isUniform(arr){
	var first = arr[0];
	var isUni = true;
	arr.forEach(function(item)
		{if(item !== first){
			isUni = false;};});
	return isUni;
}

function sumArray(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

function max(arr){
	var max = arr[0];
	for(var i = 1; i <= arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}	
	}
	return max;
}

console.log(sumArray([1,2,3,2,1]))