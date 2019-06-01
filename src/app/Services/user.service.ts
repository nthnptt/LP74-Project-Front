import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import {environment} from '../../environments/environment';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected rootURL: string = environment.rootUrl + '/user';

  constructor(private http: HttpClient) {
  }

  get(token: string) {
    return this.http.get<User>(`${this.rootURL}/${token}`);
  }
}
