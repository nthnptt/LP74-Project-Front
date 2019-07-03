import {InputMat} from './InputMat';
import {OutputMat} from './OutputMat';

export class Project {
  id: number;
  name: string;
  author: string;
  lastUpdate: string;
  inputs: InputMat[];
  outputs: OutputMat[];
}
