var a = 2;
function outer(){
	var a=1;
	function inner(){
		console.log(a);
    }
	return inner;
}

var sum = outer();
sum();