import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21-tut');
  count = 0;

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
