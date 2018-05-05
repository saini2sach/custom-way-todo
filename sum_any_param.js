

// function outer() {
//     var sum = 0;

//     function inner(param) {
//         return sum + param;
//     }
//     return inner;
// }

// var sum = outer();

// var total = sum(2)(3);

// console.log(total);


function sum() {
    var argsArr = Object.values(arguments);
    if(argsArr.length > 1) {
        return argsArr.reduce(function(a, c){ return a+c})
    }
    else {
        return function(x){
            return function(y){
                return argsArr[0] + x + y;
            }
        }
    }
}

// var total = sum(1,3,4,6,7,4);
// // var total = sum(4)(3);

// console.log(total);

// var total = 0;
// function sum(num) {
//     // var argsArr = Object.values(arguments);
//     //     argsTotal = argsArr.reduce(function(a, c){ return a+c});
//         total += num;
//         return total;
// }


var finalTotal1 = sum(1)(8)(5);
var finalTotal2 = sum(1,4, 5);

 console.log(finalTotal1 +',,,'+ finalTotal2 );