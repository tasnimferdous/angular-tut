import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  formProperties = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    console.log(this.formProperties.value);
  }

  get name() {
    return this.formProperties.get('name');
  }
  get email() {
    return this.formProperties.get('email');
  }
  get password() {
    return this.formProperties.get('password');
  }
}
