

// let will convert into var while transpile if let produce any error 
function doSomething(){
    for(let i = 0;i<5;i++){
        console.log(i);
    }
    console.log('finally',i)
}
doSomething();

// in ts if you try to change value underfly it will produce error 
// and while transpile it will be converted to suitable code 

let a1 = 5;
a1= "navnit";

let a;
a = 5;
a = true;
a="navnit";

let b: number;
b= 5;
b= "navnit";

let c:string;
c = "navnit";

let d: any;
d = 5;
d =" hello";
d = true;

let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

const colorRed = 0
const colorBlue = 1;
const colorGreen = 2;

enum color {Red, Green ,Blue}; //auto indexing under the hood 

let backgroundColor = color.Blue;

// type assertions
// type assertions tell compiler the type of the variable

let name1 = 'navnit';  // i guess name is a reserve keyword in ts
let result1 = name1.endsWith('t');   //this code will work fine and all the things that 
console.log(result1);                       // applied to string will applies;

                        //but below code will not neiither intelli will show .endsWith()
let name2;
name2 = "navnit";
let name2Result = name2.endsWith('t');

console.log(name2Result);

//2 way to type assertion
let name2ResultAssertion1 = (<string>name2).endsWith('t');
let name2ResultAssertion2 = (name2 as string).endsWith('t');


//interface  violates cohesion principle that if function needs some data that data 
// and the function should be in one unit else we will re write same code many tiems


//class & object

class Points{
    x: number ;
    y: number ;

    draw(){
        console.log("x: " +this.x + " y: " + this.y);

    }
    getDistance(another: Points){

    }
}

let point = new Points(); // if dealing with custom variable then we should must 
                          // use new to allocate space else it will throw error
point.x =1;
point.y= 2;
point.draw();

//Constructor : one class can have only one 

class Point2{
    x1: number ;
    y1: number ;

   // constructor(x: number,y: number){ 
    // ?addign thismeans that parameter is optional and once we add a optional
    // all the right parameter must have optional also
    constructor(x1?: number, y1?: number){
        this.x1 = x1;
        this.y1 = y1;
    }
    draw(){
        console.log("x1: " +this.x1 + " y1: " + this.y1);

    }
    
}

let point2 = new Point2();
point2.draw();





