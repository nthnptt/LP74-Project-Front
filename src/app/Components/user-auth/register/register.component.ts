import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../forms.css']
})
export class RegisterComponent implements OnInit {
  public login: string;
  public password: string;
  constructor() { }

  ngOnInit() {
  }

}
