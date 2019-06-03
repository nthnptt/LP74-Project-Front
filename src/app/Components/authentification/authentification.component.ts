import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../Services/user.service';
import {User} from '../../Model/User';
import UserSession from '../../Model/UserSession';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public test: string;
  constructor() {

  }

  ngOnInit() {
    UserSession.get().remove();
  }

  setCookie() {
    UserSession.get().setToken(this.test);
    document.location.reload();

  }
}
