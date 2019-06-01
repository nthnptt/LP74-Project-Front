import * as Cookie from 'js-cookie';
import {environment} from '../../environments/environment';

export default class UserSession {
  public connected: boolean;
  protected constructor() {
    this.token = null;
  }

  static session: UserSession;

  private token: string;

  static get(): UserSession {
    if (!UserSession.session) {
      UserSession.session = new UserSession();
      try {
        UserSession.session.load();
        UserSession.session.connected = true;
      } catch (e) {
        UserSession.session.connected = false;
      }
    }
    return UserSession.session;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string): UserSession {
    this.token = token;
    this.save();
    return this;
  }

  load() {
    const v = Cookie.get('version');
    if (v && v === environment.cookieVersion) {
      this.token = Cookie.get('token');
    } else {
      throw Error('Cookie not set');
    }
  }

  save() {
    if (!this.token) {
      throw Error('Token need to be set');
    }
    Cookie.set('version', environment.cookieVersion);
    Cookie.set('token', this.token);
  }
}
