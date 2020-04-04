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

arrMax = (arr) => {
	var max_val = arr[0];
	arr.forEach((item, index, array) => { if(item > max_val){max_val = item;} });
	return max_val;
}

// var val2 = arrMax([1, 50, 10]);
// console.log(val2);