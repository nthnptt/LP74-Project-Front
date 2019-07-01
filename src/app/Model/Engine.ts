import {Entity} from './Entity';
import {OutputMat} from './OutputMat';
import {MaterialInput} from './MaterialInput';

export class Engine extends Entity {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: MaterialInput[];
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
