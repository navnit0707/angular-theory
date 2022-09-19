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
var a1 = 5;
a1 = "navnit";
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
// type assertions
// type assertions tell compiler the type of the variable
var name1 = 'navnit'; // i guess name is a reserve keyword in ts
var result1 = name1.endsWith('t'); //this code will work fine and all the things that 
console.log(result1); // applied to string will applies;
//but below code will not neiither intelli will show .endsWith()
var name2;
name2 = "navnit";
var name2Result = name2.endsWith('t');
console.log(name2Result);
//2 way to type assertion
var name2ResultAssertion1 = name2.endsWith('t');
var name2ResultAssertion2 = name2.endsWith('t');
//interface  violates cohesion principle that if function needs some data that data 
// and the function should be in one unit else we will re write same code many tiems
//class & object
var Points = /** @class */ (function () {
    function Points() {
    }
    Points.prototype.draw = function () {
        console.log("x: " + this.x + " y: " + this.y);
    };
    Points.prototype.getDistance = function (another) {
    };
    return Points;
}());
var point = new Points(); // if dealing with custom variable then we should must 
// use new to allocate space else it will throw error
point.x = 1;
point.y = 2;
point.draw();
//Constructor : one class can have only one 
var Point2 = /** @class */ (function () {
    // constructor(x: number,y: number){ 
    // ?addign thismeans that parameter is optional and once we add a optional
    // all the right parameter must have optional also
    function Point2(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
    }
    Point2.prototype.draw = function () {
        console.log("x1: " + this.x1 + " y1: " + this.y1);
    };
    return Point2;
}());
var point2 = new Point2();
point2.draw();
