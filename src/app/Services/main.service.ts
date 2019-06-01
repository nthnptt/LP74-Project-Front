import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import UserSession from '../Model/UserSession';

@Injectable({
  providedIn: 'root'
})
export abstract class MainService {
  protected rootURL: string = environment.rootUrl;
  protected headers: HttpHeaders;
  protected session: UserSession;

  protected constructor(protected http: HttpClient) {
    this.session = UserSession.get();
    this.session.setToken('5dfds4545ds');
    this.headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: this.session.getToken()
    });
  }
}
