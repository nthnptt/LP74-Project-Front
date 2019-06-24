import { Component, OnInit, Input } from '@angular/core';
import UserSession from '../../Model/UserSession';
import {User} from '../../Model/User';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  session: UserSession;
  constructor() {
    this.session = UserSession.get();
    console.log(this.session.connected);
  }

  ngOnInit() {
  }

}
