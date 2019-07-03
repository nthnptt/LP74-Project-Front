import {Machine} from '../../../../Model/Machine';
import * as konva from 'konva';
import {DrawableLink} from './DrawableLink';
import {OutputMat} from '../../../../Model/OutputMat';

const Konva: any = konva;

export class DrawableMachine {
  machine: Machine;
  element: any;
  links: DrawableLink[];
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(e: Machine, opt: any = {}) {
    this.machine = e;
    this.x = opt.x ? opt.x : 0;
    this.y = opt.y ? opt.y : 0;
    this.links = [];
  }

  draw(layer: any) {
    const text = new Konva.Text({
      x: this.x + 5,
      y: this.y + 10,
      text: this.machine.name,
      fontSize: 28,
      fontFamily: 'Calibri',
      fill: '#3f3e4c',
    });
    this.width = text.width() + 10;
    this.height = text.height() + 20;
    const rect = new Konva.Rect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      fill: '#46e4c1',
      stroke: '#46e4c1',
      strokeWidth: 4
    });

    this.element = new Konva.Group();
    this.element.add(rect);
    this.element.add(text);
    this.element.draggable(true);

    this.element.on('dragmove', ($event) => {
      this.links.forEach((e: DrawableLink) => {
        e.move(layer);
      });
    });
    layer.add(this.element);
    layer.draw();
  }

  link(de: DrawableMachine, layer: any, opt = {color: '#46e4c1', output: null}) {
    if (opt.output) {
      this.removeLinkFromOutput(opt.output, layer);
    }
    const link = new DrawableLink(this, de, {color: opt.color, output: opt.output});
    link.draw(layer);
    this.links.push(link);
    de.links.push(link);
  }

  posX(): number {
    return this.element.x() + this.x + (this.width / 2);
  }

  posY(): number {
    return this.element.y() + this.y + (this.height / 2);
  }

  addClickEvent(foo: any) {
    this.element.on('click', (el) => {
      foo(el, this);
    });
  }


  selected(layer) {
    this.element.children[0].stroke('red');
    layer.draw();
  }

  unselected(layer) {
    this.element.children[0].stroke('#46e4c1');
    layer.draw();
  }

  delete(layer) {
    this.links.forEach((e: DrawableLink) => {
      e.delete(layer);
    });
    this.element.remove();
    layer.draw();
  }

  removeLink(link) {
    this.links = this.links.filter((e) => {
      return link !== e;
    });
  }

  removeLinkFromOutput(out: OutputMat, layer: any) {
    const filtered = this.links.filter((link: DrawableLink) => {
      return link.outputLinked === out;
    });
    filtered.forEach((link: DrawableLink) => {
      link.delete(layer)
    });
  }
}
