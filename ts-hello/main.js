// let will convert into var while transpile if let produce any error 
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally', i);
}
doSomething();
// in ts if you try to change value underfly it will produce error 
// and while transpile it will be converted to suitable code 
var a = 5;
a = "navnit";
var a;
a = 5;
a = true;
a = "navnit";
var b;
b = 5;
b = "navnit";
var c;
c = "navnit";
var d;
d = 5;
d = " hello";
d = true;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
; //auto indexing under the hood 
var backgroundColor = color.Blue;
