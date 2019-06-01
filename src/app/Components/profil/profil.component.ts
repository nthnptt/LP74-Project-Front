import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Model/User';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  private service: UserService;
  public user: User;
  constructor(http: HttpClient) {
    this.service = new UserService(http);
    this.user = {name: 'Disconnected'};
  }

  ngOnInit() {
    this.service.get().subscribe((e: User) => {
      this.user = e;
    });
  }

}
