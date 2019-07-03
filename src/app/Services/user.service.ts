import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MainService {
  constructor(http: HttpClient) {
    super(http);
    this.rootURL += '/user';
  }

  get() {
    return this.http.get<User>(`${this.rootURL}`, {headers: this.headers});
  }
}
