import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserSession from './Model/UserSession';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(location: Location, router: Router) {
    const url = location.path();
    const session = UserSession.get();
    if (session.getToken()) {
      session.setLastPathRequest(url);
      router.navigate(['/profil/get']);
    } else {
      router.navigate(['/auth']);
    }
  }
}
