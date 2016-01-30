var array,
	max;


array = randomArray(Math.round(Math.random() * 100));

max = getMax(array);

console.log(array);
console.log(max);
  
function getMax (arr) {
	var max = 0;
	for (var i in arr) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

function randomArray(size) {
	var arr = [];

	if (typeof size !== "number" || size < 0) {
		console.log("Size must be a number");
		return;
	}

	for (var i = 0; i < size; i++) {
		arr.push(Math.round(Math.random() * 100));
	}

	return arr;
}





