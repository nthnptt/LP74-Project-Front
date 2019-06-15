import {Component, OnInit} from '@angular/core';


enum Focus {
  REGISTER,
  LOGIN
}

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  focus: Focus;
  step: string;
  Focus = Focus;

  constructor() {
    this.focus = Focus.LOGIN;
    this.step = '35%';
  }

  ngOnInit() {
  }

  moveFocus() {
    switch (this.focus) {
      case Focus.LOGIN:
        this.focus = Focus.REGISTER;
        this.step = '-15%';

        break;
      case Focus.REGISTER:
        this.focus = Focus.LOGIN;
        this.step = '35%';
        break;
    }

  }
}
