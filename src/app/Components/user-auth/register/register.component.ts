import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {UserForm} from '../../../Model/UserForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../forms.css']
})
export class RegisterComponent implements OnInit {
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
