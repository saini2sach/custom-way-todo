

function findStr(a,b) {
    if(a.length == 0 || b.length == 0) {
        console.log("No common substring found!, one string length is Zero");
        return false;
    }

    var mainCount = 0,
        mainSubStr = "";

    for(var i=0; i < a.length; i++) {
        var localStr = "",
            localCount = 0;

        for(var j=0; j < b.length; j++) {
            if(a[i] == b[j]) {
                localCount++;
                localStr += b[j];
                i++;
            }
            if(localCount > mainCount) {
                mainCount = localCount;
                mainSubStr = localStr;
            }
        }
    }
    console.log("Longest substr is : \n\n\t");
    console.log(mainSubStr);

}


var str1 = "abcghifg",
    str2 = "bcmfhif",
    str3 = "sasainsai",
    str4 = "thesainigreat";

findStr(str3, str4);