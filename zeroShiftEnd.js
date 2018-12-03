function zeroShift(arr) {
	var count = 0;
	for(var i=0; i<arr.length; i++) {
		if(arr[i] != 0){
			arr[count] = arr[i];
			count++;
		}	
	}
	while(count < arr.length) {
		arr[count] = 0;
		count++;
	}
	return arr;
}

var arr = [1,3,4,0,0,1,0,5,0,9,10];
zeroShift(arr);