import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count = 0;

  students = [
    { "name": "A", "mail": "a@123.com" },
    { "name": "B", "mail": "b@123.com" },
    { "name": "C", "mail": "c@123.com" },
  ];

  signalValue = signal(10);

  constructor() {
    effect(() => {
      console.log(this.signalValue());
    });
  }

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
