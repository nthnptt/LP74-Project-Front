import {Injectable} from '@angular/core';
import {Material} from '../Model/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() {
    let storage = JSON.parse(localStorage.getItem('material'));
    if (!storage) {
      storage = {id: 1, data: []};
    }
    if (!storage.id || !storage.data) {
      storage = {id: 1, data: []};
    }
    this.save(storage);
  }

  get(id: number): Material {
    const storage = JSON.parse(localStorage.getItem('material'));
    return storage.data.find((e: Material) => {
      return e.id === id;
    });
  }

  getAll(): Material[] {
    const storage = JSON.parse(localStorage.getItem('material'));
    return storage.data;
  }

  post(m: Material) {
    const storage = JSON.parse(localStorage.getItem('material'));
    m.id = storage.id;
    storage.id += 1;
    storage.data.push(m);
    this.save(storage);
  }

  delete(m: Material) {
    if (m.id) {
      const storage = JSON.parse(localStorage.getItem('material'));
      storage.data = storage.data.filter((e: Material) => {
        return e.id !== m.id;
      });
      this.save(storage);
    }
  }

  put(m: Material) {
    if (m.id) {
      const storage = JSON.parse(localStorage.getItem('material'));
      const element = storage.data.find((e: Material) => {
        return e.id === m.id;
      });
      console.log(m.name);
      element.name = m.name;
      element.author = m.author;
      element.lastUpdate = m.lastUpdate;
      this.save(storage);
    }
  }

  private save(storage: any) {
    localStorage.setItem('material', JSON.stringify(storage));
  }
}
