export class Point5{
    
    //if public then write public too in the params
    constructor(private x1?: number, private y1?: number){
        this.x1 = x1;
        this.y1 = y1;
    }
    draw(){
        console.log("x1: " +this.x1 + " y1: " + this.y1);
    }
}
let point5 = new Point5();