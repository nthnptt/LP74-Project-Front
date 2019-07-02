import {Component, OnInit} from '@angular/core';
import UserSession from '../../Model/UserSession';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  session: UserSession;

  constructor(private router: Router) {
    this.session = UserSession.get();
  }

  ngOnInit() {
  }

  exit() {
    this.session.disconnected();
    this.router.navigate(['auth']);
  }
}
