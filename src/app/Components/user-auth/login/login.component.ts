import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import UserSession from '../../../Model/UserSession';
import {User} from '../../../Model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../forms.css']
})
export class LoginComponent implements OnInit {
  @Input() focus: boolean;
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

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name : this.username.value,
      password : this.password.value
    };
    console.log(user);
    this.connect();
  }

  get username() {
    return this.userform.get('username');
  }

  get password() {
    return this.userform.get('password');
  }

  private connect() {
    const session = UserSession.get();
    const user = new User();
    session.setToken(this.username.value);
    this.router.navigate(['profil/get']);
  }
}
