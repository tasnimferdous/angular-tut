import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  formProperties = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.formProperties.value);
    console.log("Changing value");
    this.formProperties.setValue({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "kjhgdfgdfgdfg",
    })
    console.log("After changing value");
    console.log(this.formProperties.value);
  }
}
