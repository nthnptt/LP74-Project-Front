import {Entity} from './Entity';
import {OutputMat} from './OutputMat';
import {InputMat} from './InputMat';

export class Machine extends Entity {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: InputMat[];
  outputs: OutputMat[];

  constructor() {
    super();
    this.name = '';
    this.author = '';
    this.lastUpdate = '';
    this.inputs = [];
    this.outputs = [];
  }
}
