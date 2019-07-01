import {Entity} from './Entity';
import {Output} from './Output';
import {Input} from './Input';

export class Engine extends Entity {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: Input[];
  outputs: Output[];

  constructor() {
    super();
    this.name = '';
    this.author = '';
    this.lastUpdate = '';
    this.inputs = [];
    this.outputs = [];
  }
}
