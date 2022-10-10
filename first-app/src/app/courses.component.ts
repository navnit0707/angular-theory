import { Component } from "@angular/core";

@Component({
    selector: 'courses',

    template: `
       {{course.title | uppercase}} <br/>
       {{course.students}} <br/>
       {{course.rating | number:'2.1-1'}} <br/>
       {{course.price | currency: 'INR':true:'3.2-2'}} <br/>
       {{course.releaseDate | date:'shortDate'}} <br/>
    `
})

export class CoursesComponent{
  course ={
    title : "THE complete angular course",
    rating: 4.9745,
    students: 301123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }
} 