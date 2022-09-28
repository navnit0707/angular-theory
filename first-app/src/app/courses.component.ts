import { Component } from "@angular/core";

@Component({
    selector: 'courses',

    //template: '<h2>{{title}}</h2>' // data binding to the view
    
    template: '<h2>{{ getTitle()}}</h2>'
})

export class CoursesComponent{
    title = "List of courses";

    getTitle(){                 //definign method
        return this.title;
    }

}