export default class UserSession {
  protected constructor() {
    this.token = null;
  }

  static session: UserSession;

  private token: string;

  static get(): UserSession {
    if (!UserSession.session) {
      UserSession.session = new UserSession();
    }
    return UserSession.session;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string): UserSession {
    this.token = token;
    return this;
  }
}
