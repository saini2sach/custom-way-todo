function printMaxTwo(arr){

    var first= second = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second && arr[i] != first){
            second = arr[i]
        }
    }
	console.log("Largest Element is : ", first);
	console.log("Second Largest Element is : ", second);
}

function printMinTwo(arr){

    var first= second = 999999999;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }
        else if(arr[i] < second && arr[i] != first){
            second = arr[i]
        }
    }
	console.log("\nSmallest Element is : ", first);
	console.log("Second Smallest Element is : ", second);
}

var arr = [56,2,4,3,43,55]

printMaxTwo(arr);
printMinTwo(arr);