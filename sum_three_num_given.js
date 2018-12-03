
function findThreeNum(arr, givenNum) {
    var i=0,j = arr.length, n=j, isMatchFound = false;
    arr.sort(compNum);

    while(i<j) {
        if(traverseInnerArr(i, j, givenNum, arr)) {
            isMatchFound = true;
            break;
        }
        i++, j--;
    }
    if(!isMatchFound) {
        console.log("No three number will results into given number!");
    }
} 

function traverseInnerArr(i, j, num, arr){
    var lastCheck = num - arr[i] - arr[j-1];
    for(var init = i+1; init < j-1; init++) {
        if(lastCheck - arr[init] === 0) {
            console.log("\nThree Number found whose sum resulting into given Number\n");
            console.log(" -- "+ arr[i] +" --+-- "+ arr[j-1] +" --+-- "+ arr[init] +" === "+ num);
            return true;
        }
    }
    return false;
}


var arr = [1,5,6,9,12,1,2];
var givenNum = 13;

function compNum(a,b) {
    return a-b;
}

findThreeNum(arr, givenNum);