// jshint esversion: 6 


// Finds average of an array
arrAvg = (arr) => {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
	   total += arr[i];
	}
	return (total/arr.length);
}

// var val1 = arrAvg([1, 3, 5]);
// console.log(val1);




// Finds max value in an array
arrMax = (arr) => {
	var max_val = arr[0];
	arr.forEach((item, index, array) => { if(item > max_val){max_val = item;} });
	return max_val;
}

// var val2 = arrMax([1, 50, 10]);
// console.log(val2);




//Finds the sum of even numbers in an array
sumEvens = (arr) => {
	var total = 0;
	for(let i of arr){
		if(i % 2 == 0){ total += i; }
	}
	return total;
}

// var val3 = sumEvens([1, 2, 3, 4, 1]);
// console.log(val3);



// Returns the position of a specific character in the alphabet.
function alphaPosition(ch){
	var pos = ch.toLowerCase().charCodeAt();
	return (pos-96);
}

// var val4 = alphaPosition('h');
// console.log(val4);




