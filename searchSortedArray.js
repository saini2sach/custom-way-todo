

var array = [2, 3, 6, 8, 11, 14],
    arrayLength = array.length,
    item = 5,
    itemSearch = binarySearchElem(array, 0, arrayLength-1, item);

    if(itemSearch == -1) {
        console.log("Item is not present in the given array");
    } else {
        console.log("Item is present in the array at index = "+ itemSearch);
    }

function binarySearchElem(array, start, end, item) {
    if(end >= start) {
        var mid  = Math.floor((start + end)/2);

        if(array[mid] == item) {
            return mid;
        }
        if(array[mid] > item) {
            return binarySearchElem(array, start, mid-1, item);
        }
        return binarySearchElem(array, mid+1, end, item);
    }
    return -1;
}

