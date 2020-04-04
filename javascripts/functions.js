// jshint esversion: 6 

arrAvg = (arr) => {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
	   total += arr[i];
	}
	return (total/arr.length);
}

// var val1 = arrAvg([1, 3, 5]);
// console.log(val1);