import { Component } from "@angular/core";

@Component({
    selector: 'courses',

    template: `
       {{text | summary:10}} <br/>
    `
})

export class CoursesComponent{
  text=`
   Loarem Ipseum is simply dummy text of the printing and 
  `
} 