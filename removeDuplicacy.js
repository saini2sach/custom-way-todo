

function removeDuplicacy(arr) {
    var newArr  = [];
    for(var i=0; i<arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function removeDuplicacyMap(arr) {
    var obj = {};

    for(var i=0; i<arr.length; i++) {
        
        obj[arr[i]] = 444;
    }
    return Object.keys(obj);
}

function removeDuplicacyWithoutNew(arr) {
    var countr = 0;
    for(var i=0; i<arr.length; i++) {
        // if()
    }
}

// console.log(removeDuplicacy([1,2,3,2,4,3,6]));

console.log(removeDuplicacyMap([1,-2,2,3,2,4,3,6,-2,-3,-1, -3,0]));