import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../forms.css']
})
export class LoginComponent implements OnInit {
  userform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name : this.username.value,
      password : this.password.value
    };
    console.log(user);
  }

  get username() {
    return this.userform.get('username');
  }

  get password() {
    return this.userform.get('password');
  }

}
