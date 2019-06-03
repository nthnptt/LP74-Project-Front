import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Model/User';
import UserSession from '../../Model/UserSession';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  private service: UserService;
  public user: User;

  constructor(http: HttpClient) {
    this.service = new UserService(http);
    this.user = UserSession.get().getUser();
  }

  ngOnInit() {
  }

  rmvCook() {
    UserSession.get().disconnected();
    document.location.reload();
  }
}
