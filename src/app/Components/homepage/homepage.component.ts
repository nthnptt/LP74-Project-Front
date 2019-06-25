import {Component, OnInit} from '@angular/core';
import UserSession from '../../Model/UserSession';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  session: UserSession = UserSession.get();
  createmode: boolean;

  constructor() {
    this.createmode = false;
  }

  ngOnInit() {
  }

  onNewProjectClick() {
    console.log('s2')
    this.createmode = true;
  }

}
