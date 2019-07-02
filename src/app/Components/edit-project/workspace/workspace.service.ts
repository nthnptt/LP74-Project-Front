import {Injectable} from '@angular/core';
import {Machine} from '../../../Model/Machine';
import {OutputMat} from '../../../Model/OutputMat';

declare type callbackMachine = (m: Machine) => void;
declare type callback = (color: string, out: OutputMat) => void;

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  callbackM: callbackMachine[];
  callbackLinkMode: callback[];

  constructor() {
    this.callbackM = [];
    this.callbackLinkMode = [];
  }

  addMachine(m: Machine) {
    this.callbackM.forEach((foo: callbackMachine) => {
      foo(m);
    });
  }

  linkMode(color: string, out: OutputMat) {
    this.callbackLinkMode.forEach((foo: callback) => {
      foo(color, out);
    });
  }

  addCallbackM(foo: callbackMachine) {
    this.callbackM.push(foo);
  }

  addCallbackLinkMode(foo: callback) {
    this.callbackLinkMode.push(foo);
  }

}
