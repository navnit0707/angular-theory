

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

let a = 5;
a= "navnit";

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

