
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function highAndLow(numbers){
  var arr = numbers.split(' ').map(Number);
  return Math.max.apply(null, arr)+' '+Math.min.apply(null, arr);
}

// Math.min.apply(null, arr) is equal to Math.min(...arr);

function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort(function(a,b){return a-b});
  
  return numbers[0]+numbers[1];
};

var countBits = function(n) {
  var num = 0;
  while(n != 0) {
    if(n%2 != 0) {
      num++;
    }
    n = Math.floor(n/2);
    
  }
  return num;
  
};

function findMissingLetter(array)
{
  
  var init = array[0].charCodeAt(0);
  var elem;
  for(var i=1; i<array.length; i++) {
    if(init !== array[i].charCodeAt(0)){
      elem = array[i];
      init++;
    }
  }
  return elem;
}

function digital_root(n) {
  var arr = (''+n).split('');
  var sum = arr.map(Number).reduce(function(a,b){ return a+b;});
  if((''+sum).length > 1) {
    var finalSum = digital_root(sum);
  }
  else {
    return sum;
  }
  
  return finalSum;
}
function digital_root(n) {
  return (n - 1) % 9 + 1;
}


function pigIt(str){
  var strArr = str.split(' ');
  for(var i=0; i<strArr.length; i++) {
    if(strArr[i].length > 1) {
      strArr[i] = strArr[i].slice(1) + strArr[i][0] + 'ay';
    }
  }
  return strArr.join(' ');
}

function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}


function dirReduc(arr){
  var changed = 0;

  function calc(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
      if(check(arr[i], arr[i+1])) {
        i = i+1;
        changed++;
      }
      else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  var newArr = calc(arr);
  
  
  while(changed != 0 ){
    changed = 0;
    newArr = calc(newArr);
  }
  return newArr;
}

function check(a, b) {
  if((a === 'NORTH' && b === 'SOUTH')|| (a === 'SOUTH' && b === 'NORTH') )
    return true;
  if((a === 'EAST' && b === 'WEST')|| (a === 'WEST' && b === 'EAST') )
    return true;
  return false  
}

function bouncingBall(h,  bounce,  window) {
  var count = 1, flag=false, final;
  
  if((h <= 0) || (window > h) || !(bounce > 0 && bounce < 1)) {
    return -1;
  }
  
  while( window < h) {
    h = bounce * h;
    count++;
    
  }
  
  return count;
  
}

<div class="sidebar">
<textarea></textarea>
</div> 


$('.sidebar').on( 'keypress' , 'textarea:last-of-type' , function(e){
        $(this).after('<textarea placeholder="Tool Name" />') 
});