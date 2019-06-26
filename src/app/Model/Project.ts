import {Input} from './Input';
import {Output} from './Output';

export class Project {
  name: string;
  author: string;
  lastUpdate: string;
  inputs: Input[];
  outputs: Output[];
}
