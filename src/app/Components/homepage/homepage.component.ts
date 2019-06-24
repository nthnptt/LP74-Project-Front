import { Component, OnInit } from '@angular/core';
import UserSession from '../../Model/UserSession';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  session: UserSession = UserSession.get();
  constructor() {

  }

  ngOnInit() {
  }

}
