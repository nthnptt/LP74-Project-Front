import {InputMat} from './InputMat';
import {OutputMat} from './OutputMat';
import {Entity} from "./Entity";

export class Project extends Entity {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: InputMat[];
  outputs: OutputMat[];

  constructor() {
    super();
    this.name = "";
    this.author = "";
    this.lastUpdate = "";
    this.inputs = [];
    this.outputs = [];
  }

}
