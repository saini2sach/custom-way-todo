var Foo = function(a) {}

Foo.prototype.foo2 = function() {
    console.log(a);
}


var f1 = new Foo(7);

f1.foo2();

function Foo(a) {
    this.a = a;
    this.foo = function(){
        console.log(a);
    }
    this.__proto__.baz = function(){
        console.log(a);
    }
}

Foo.prototype.abc = function() {
    console.log(this.a);
}

var obj = new Foo(6);

obj.foo();
obj.baz();
obj.abc();







