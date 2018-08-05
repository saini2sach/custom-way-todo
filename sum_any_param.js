

function outer() {
    var sum = 0;

    function inner(param) {
        return sum + param;
    }
    return inner;
}

var sum = outer();

//var total = sum(2)(3);

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


// var finalTotal1 = sum(1)(8)(5);
// var finalTotal2 = sum(1,4, 5);

//  console.log(finalTotal1 +',,,'+ finalTotal2 );

// Currying function

function curry(fn) {
    var arity = fn.length; // check the arity of the given function
    var args = [];  // store all arguments here
    function curried() { // the curried function
      args = args.concat(Array.prototype.slice.call(arguments));
      if (arity <= args.length) {
        return fn.apply(null, args); // call the function with all the arguments
      }
      return curried; // otherwise return the curried function to be given more arguments
    }
    return curried;
  }

var add = function(a,b,c) {
    return a+b+c;
}

//let summ = a => b => !b ? a : summ(a+b);

function summ(a) {
	return function(b) {
		if(!b) {
			return a;
		}
		else {
			return summ(a+b);
		}
	}
}

console.log(curry(add)(1)(5)(4));