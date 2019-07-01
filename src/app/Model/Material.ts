import {Entity} from './Entity';

export class Material extends Entity {
  name: string;
  author: string;
  lastUpdate: string;

  constructor() {
    super();
    this.name = '';
    this.lastUpdate = '';
    this.author = '';
  }
}
