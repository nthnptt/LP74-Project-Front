import {Component, OnInit} from '@angular/core';
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

    window.setTimeout(() => {
      UserSession.get().setUser({name: UserSession.get().getToken()});
      const url = UserSession.get().getLastPathRequest();
      console.log(url);
      UserSession.get().setLastPathRequest(null);
      router.navigate([url]);
    }, 1000);

  }

  ngOnInit() {
  }

}
