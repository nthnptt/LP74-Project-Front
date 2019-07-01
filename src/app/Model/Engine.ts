import {Entity} from './Entity';
import {OutputMat} from './OutputMat';
import {Input} from './Input';

export class Engine extends Entity {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: Input[];
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
