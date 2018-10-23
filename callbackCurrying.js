

// myFunc(add, 1)(2,3) || myFunc(add)(1,2,3) || myFunc(add, 1,2)(3) || myFunc(add, 1,2,3);

function add(a,b,c) {
    return a+b+c;
}

function myFunc() {
    var argsArr = Array.prototype.slice.call(arguments);
    
    if(argsArr.length === 2) {
        return function(b,c) {
            return argsArr[0].call(null, argsArr[1], b, c);
        }
    }
    else if(argsArr.length === 1) {
        return function(a,b,c) {
            return argsArr[0].call(null, a,b,c);
        }
    }
    else if(argsArr.length === 3) {
        return function(c) {
            return argsArr[0].call(null, argsArr[1], argsArr[2], c);
        }
    }
    else {
        return argsArr[0].call(null, argsArr[1], argsArr[2], argsArr[3]);
    }
}

console.log(myFunc(add, 1)(2, 3));
console.log(myFunc(add)(1, 2, 3));
console.log(myFunc(add, 1, 2)(3));
console.log(myFunc(add, 1, 2, 3));


const mul = (...args) => (args.length > 1) ? args.reduce((acc, item) => acc*item, 1) : (b) => (c) => args[0]*b*c;
console.log(mul(2,3,4) +'||'+ mul(2,3,4));
