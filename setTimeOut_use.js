
var uniqueId;

function openWin() {
    var myWindow = window.open("https://www.google.co.in/", "myWindow", "width=200, height=100");
   // myWindow.document.write("<p>This is 'myWindow'</p>");
    uniqueId = setTimeout(function(){ myWindow.close() }, 3000);
}

function stopSetTimeOut(){
    clearTimeout(uniqueId);
}