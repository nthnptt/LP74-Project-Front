import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserSession from './Model/UserSession';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router) {
    const session = UserSession.get();
    if (session.getToken()) {
      router.navigate(['/profil/get']);
    } else {
      router.navigate(['/auth']);
    }
  }
}
