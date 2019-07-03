import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../../Model/User";
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../forms.css']
})
export class RegisterComponent implements OnInit {
  @Output() submitOK = new EventEmitter<any>();
  @Input() focus: boolean;
  userform = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  get username() {
    return this.userform.get('username');
  }

  get password() {
    return this.userform.get('password');
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User();
    user.password = this.password.value;
    user.name = this.username.value;
    try {
      this.service.post(user);
      this.username.setValue('');
      this.password.setValue('');
      this.submitOK.emit();
    } catch (e) {

    }

  }
}
