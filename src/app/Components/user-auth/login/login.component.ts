import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import UserSession from '../../../Model/UserSession';
import {User} from '../../../Model/User';
import {Router} from '@angular/router';
import {UserService} from "../../../Services/user.service";

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
  private service: UserService;

  constructor(private router: Router) {
    this.service = new UserService();
  }

  get username() {
    return this.userform.get('username');
  }

  get password() {
    return this.userform.get('password');
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name: this.username.value,
      password: this.password.value
    };
    console.log(user);
    this.connect();
  }

  private connect() {
    const session = UserSession.get();
    const user = new User();
    user.password = this.password.value;
    user.name = this.username.value;
    const existantuser = this.service.get(user)
    if (existantuser) {
      if (existantuser.password === user.password){
        session.setToken(user.name);
        this.router.navigate(['profil/get']);
      } else {
        alert('Mauvais mot de passe');
      }
    } else {
      alert('L\'utilisateur n\'existe pas');
    }

  }
}
