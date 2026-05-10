import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = new FormControl();
  password = new FormControl();

  onSubmit() {
    console.log(this.name.value);
    console.log(this.password.value);
  }
}
