

var inputWord = 'tea',
    sizeOfDictionary = 6,
    dictionaryWords = ['god', 'eta', 'eat', 'good', 'bad', 'tae'];
    findAnagram();

function findAnagram() {
    var isAnagramFound = false;
    for(var i=0; i < dictionaryWords.length; i++) {
        if((inputWord.length === dictionaryWords[i].length) && matchTwoString(inputWord, dictionaryWords[i])) {
            console.log(dictionaryWords[i]);
            isAnagramFound = true;
        }
    }
    if(!isAnagramFound) {
        console.log("No anagram found for the input word");
    }
}

function matchTwoString(x, y) {
    var arr_x = x.split(''),
        arr_y = y.split(''),
        matchFlag = true;
    
        for(var i=0; i< arr_x.length; i++) {
            if(!arr_y.includes(arr_x[i])) {
                matchFlag = false;
            }
        }
        return matchFlag;
}

