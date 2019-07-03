import {Injectable} from '@angular/core';
import {Machine} from "../Model/Machine";
import {InputMat} from "../Model/InputMat";
import {MaterialService} from "./material.service";
import {OutputMat} from "../Model/OutputMat";
import {Material} from "../Model/Material";

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private materialService: MaterialService;

  constructor() {
    this.materialService = new MaterialService()
    let storage = JSON.parse(localStorage.getItem('machine'));
    if (!storage) {
      storage = {id: 1, data: []};
    }
    if (!storage.id || !storage.data) {
      storage = {id: 1, data: []};
    }
    this.save(storage);
  }

  private save(storage: any) {
    localStorage.setItem('machine', JSON.stringify(storage));
  }

  getAll(): Machine[] {
    const storage = JSON.parse(localStorage.getItem('machine'));
    storage.data.forEach((e: Machine) => {
      e.inputs.forEach((i: InputMat) => {
        i.material = this.materialService.get(i.material.id)
      });
      e.outputs.forEach((o: OutputMat) => {
        o.material = this.materialService.get(o.material.id)
      })
    });
    return storage.data;
  }

  post(m: Machine) {
    const storage = JSON.parse(localStorage.getItem('machine'));
    m.id = storage.id;
    storage.id += 1;
    storage.data.push(m);
    this.save(storage);
  }

  put(m: Machine) {
    if (m.id) {
      const storage = JSON.parse(localStorage.getItem('machine'));
      const element = storage.data.find((e: Machine) => {
        return e.id === m.id;
      });
      element.name = m.name;
      element.author = m.author;
      element.lastUpdate = m.lastUpdate;
      element.inputs = m.inputs;
      element.outputs = m.outputs;
      this.save(storage);
    }
  }

  delete(m: Material) {
    if (m.id) {
      const storage = JSON.parse(localStorage.getItem('machine'));
      storage.data = storage.data.filter((e: Machine) => {
        return e.id !== m.id;
      });
      this.save(storage);
    }
  }
}
