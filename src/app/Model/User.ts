import * as md5 from 'js-md5';

export class User {
  name: string;
  _password: string;

  constructor(u: User = null){
    if(u){
      this.name=u.name;
      this._password=u._password;
    } else {
      this.name = "";
      this._password = "";
    }
  }

  set password(password: string){
    this._password = md5(password);
  }
  get password(){
    return this._password;
  }
}
