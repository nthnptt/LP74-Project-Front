import {MaterialInput} from './MaterialInput';
import {OutputMat} from './OutputMat';

export class Project {
  id: number;
  name: string;
  author: string;
  lastUpdate: string;
  inputs: MaterialInput[];
  outputs: OutputMat[];
}
