import {Input} from './Input';
import {Output} from './Output';

export class Project {
  id: number;
  name: string;
  author: string;
  lastUpdate: string;
  inputs: Input[];
  outputs: Output[];
}
