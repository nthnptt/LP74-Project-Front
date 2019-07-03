import {Injectable} from '@angular/core';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    let storage = JSON.parse(localStorage.getItem('user'));
    if (!storage) {
      storage = {data: []};
    }
    if (!storage.data) {
      storage = {data: []};
    }
    this.save(storage);
  }

  private save(storage: any) {
    localStorage.setItem('user', JSON.stringify(storage));
  }

  post(user: User) {
    let storage = JSON.parse(localStorage.getItem('user'));
    const userExist = storage.data.find((u: User) => {
      return u.name === user.name;
    })
    if (userExist) {
      alert('L\'utilisateur existe déjà')
      throw new Error();
    } else {
      storage.data.push(user);
    }
    this.save(storage);
  }

  get(user: User):User {
    let storage = JSON.parse(localStorage.getItem('user'));
    return new User(storage.data.find((u: User) => {
      return u.name === user.name;
    }))
  }
}
