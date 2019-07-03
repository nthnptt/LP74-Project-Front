import {Injectable} from '@angular/core';
import {Project} from "../Model/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
    let storage = JSON.parse(localStorage.getItem('project'));
    if (!storage) {
      storage = {id: 1, data: []};
    }
    if (!storage.id || !storage.data) {
      storage = {id: 1, data: []};
    }
    this.save(storage);
  }

  getAll(): Project[] {
    const storage = JSON.parse(localStorage.getItem('project'));
    return storage.data;
  }

  post(p: Project) {
    const storage = JSON.parse(localStorage.getItem('project'));
    p.id = storage.id;
    storage.id += 1;
    storage.data.push(p);
    this.save(storage);
  }

  private save(storage: any) {
    localStorage.setItem('project', JSON.stringify(storage));
  }


  delete(m: Project) {
    if (m.id) {
      const storage = JSON.parse(localStorage.getItem('project'));
      storage.data = storage.data.filter((e: Project) => {
        return e.id !== m.id;
      });
      this.save(storage);
    }
  }

  put(p: Project) {
    if (p.id) {
      const storage = JSON.parse(localStorage.getItem('project'));
      const element = storage.data.find((e: Project) => {
        return e.id === p.id;
      });
      element.name = p.name;
      element.author = p.author;
      element.lastUpdate = p.lastUpdate;
      element.inputs = p.inputs;
      element.outputs = p.outputs;
      this.save(storage);
    }
  }

  get(id: number) {
    const storage = JSON.parse(localStorage.getItem('project'));
    return storage.data.find((e: Project) => {
      return e.id === id;
    });
  }

}
