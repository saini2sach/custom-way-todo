// var curry = function(fun) {

//   // nothing to curry. return function
//   if (arguments.length < 1) {
//     return this;
//   }

//   // Create an array with the functions arguments
//   var args = Array.prototype.slice.call(arguments, 1);
//   return function() {

//     // *Apply* fn with fn's arguments
//     return fun.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
//   };
// };

// // Creating function that already predefines adding 1 to a
// function addOneToNumber(a) {
//     console.log(1 + a);
// }

// // addOneCurried is of function
// var addOneCurried = curry(addOneToNumber);
// console.log(addOneCurried(14)); // 11


var makeCurry = function(fn){
  if(typeof fn!=='function'){
      throw Error('No function provided');
  }

  var slice = [].slice;
  return function curriedFn(){
    var args = slice.call(arguments);
    if(args.length < fn.length){
      return function(){
        return curriedFn.apply(null, args.concat( slice.call(arguments) ));
      };
    }

    return fn.apply(null, args);
  };
};

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