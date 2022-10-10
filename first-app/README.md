# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Order in which i learnt

## Components
components  encapsulate the data, logic aand html markup for the view
## Component manually
step 1 : created a component using @angular/core
register in Decorator , that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

step 2 : register in app.module 
add component inside declaration array

step 3 : Used that component in app.component to render

## creating Component using cli
ng g c course  // g means generate c means component course is the       name of the component

## Directives 
used to manuplate the dom either delete,update etc
ex 
"<ul>
    <li *ngFor="let course for courses">
        {{course}}
    </li>
</ul>
"

## services

in angular it is recommended to use only the no functional part in component so thats we use services so that we can re use it later 

## Display data
## Apply classes / styles dynamically
## Format data using pipes
## Handle events

event bubbling :- 
if we have 2 nested elements and we try to click it 
then the event bubbling concept will come in picture 
example
`<div>
    outer
    <div>inner</div>
</div>`

in this if we have any click method over both the div then first inner will be printed then outer

calling stopPropogation() on event willl stop bubbling
 
## template variable 
can be used to store data which is inputed by user

## pipe
pipe is used to control or alter the output like converting it to uper case lowercase etc

## custom pipe 

1) first create a .pipe.ts file to define the pipe behaviour
ex summary.pipe.ts
    
2) register it to module 
3) use the pipe
