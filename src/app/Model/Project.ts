import {Input} from './Input';
import {OutputMat} from './OutputMat';

export class Project {
  id: number;
  name: string;
  author: string;
  lastUpdate: string;
  inputs: Input[];
  outputs: OutputMat[];
}
