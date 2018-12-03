
function findClosestSumPair( arr, k ) {

    var i,j, arrLen = arr.length, mappedArray=[], minDiff, minIndex;
    
    for(i=0; i<arrLen; i++) {
        for(j=i+1; j<arrLen; j++) {
            if(i != j) {
                mappedArray.push({
                    'first': arr[i],
                    'second': arr[j],
                    'diff': Math.abs((arr[i]+arr[j]) -k)
                });
            }
        }
    }

    minDiff = mappedArray[0]['diff'];
    minDiffObj = mappedArray[0];

    for(i=0; i<mappedArray.length; i++) {
        if(minDiff > mappedArray[i]['diff']) {
            minDiff = mappedArray[i]['diff'];
            minDiffObj = mappedArray[i];
        }
    }

    console.log("The two element whose sum is closest to given number are : \n\n\t");
    console.log(minDiffObj['first'] + ' , '+ minDiffObj['second']);
    // console.log(mappedArray);
}

var arr = [1,3,5,6,8,2,9],
    k = 8;

findClosestSumPair(arr, k);