

function outer(){
    var a =3;
    function inner(){
        console.log(a);
    }
    return inner;
}

var sum = outer();


// ++++++++++++++++++++
sum(1,2) // 3
sum(1)(2) // 3


function sum(){
    var arr = Array.prototype.slice.call(arguments); // arguments.slice(0)
    
    if(arr.length == 1 ){
        return function(b){
            return arr[0] + b;
        }
    }
    else {
        return arr[0]+arr[1];
    }
}

// call(context, param1...)

apply(context, []);

splice(index, count);
slice(initial, final);

var a = [ 1, 2, [4,5], [[6]], [[7,[[8]]]]]

a.flatten()

output
[1,2,4,5,6,7,8]


Array.prototype.flatten = function(){
    
    return this.reduce(function(flatted, toBeFlatten) {
        return flatted.concat(Array.isArray(toBeFlatten) ? toBeFlatten.flatten() : toBeFlatten);
        }, []);        
    };

Array.prototype.flatten = function(){
    
    return this.reduce(function(flatted, toBeFlatten) {
        return flatted.concat(Array.isArray(toBeFlatten) ? toBeFlatten.flatten() : toBeFlatten);
        }, []);        
    };



// // 
// https://webhost/getSum?x = 1&y=2

// {
// sum: 3  // print 3
// }

// function(x, y){
// var sum = 0;
// // code here

//  $.ajax({
     
//      url: 'https://webhost/getSum?x=1&y=2',
//      success: function(response) {
//          document.getElementById("sum").innerHTML = response;
//      }
 
//  })
 
 
 
 $.get('https://webhost/getSum', {x : 1, y : 2})
     .done(function(response){
         document.getElementById("sum").innerHTML = response;
     });

<div id="sum"></div>

// ===========================
for(var I=0; I<5;I++) {
  settimeout(function() { console.log(I);} , I * 100);
}
// =================================================

// display:

// block
// inline-block,
// inline,
// none,
// flex
// =======================
/* <div class="p"> // 500px
<div class="c1"></div> // 300px
<div class="c2"></div> // remaining
</div>

.p {
    display; flex;
    width: 500px;
    .c1 {
        width: 300px;
        //flex: 1;
    }
    .c2 {
        flex: 1;
    }
} */



