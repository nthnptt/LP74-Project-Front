import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {User} from '../../Model/User';
import UserSession from '../../Model/UserSession';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get-profil',
  templateUrl: './get-profil.component.html',
  styleUrls: ['./get-profil.component.css']
})
export class GetProfilComponent implements OnInit {

  constructor(router: Router, http: HttpClient) {
    // const service = new UserService(http);
    // service.get().subscribe((u: User) => {
    //   UserSession.get().setUser(u);
    //   router.navigate(['profil']);
    // });

    UserSession.get().setUser({name: UserSession.get().getToken()});
    router.navigate(['profil']);
  }

  ngOnInit() {
  }

}
