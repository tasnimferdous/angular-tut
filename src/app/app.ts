import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21-tut');
  count = 0;

  students = [
    { "name": "A", "mail": "a@123.com" },
    { "name": "B", "mail": "b@123.com" },
    { "name": "C", "mail": "c@123.com" },
  ];

  onClick(event:string) {
    switch(event) {
      case "increase":
        this.count++;
        break;
      case "decrease":
        this.count--;
        break;
      default :
        this.count = 0;
        break;
    }
  }

  callAnotherFunction() {
    console.log("2nd function");
  }
}
