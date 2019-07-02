import * as konva from 'konva';
import {DrawableMachine} from './DrawableMachine';
import {OutputMat} from '../../../../Model/OutputMat';

const Konva: any = konva;

export class DrawableLink {
  from: DrawableMachine;
  to: DrawableMachine;
  outputLinked: OutputMat;
  element: any;
  color: string;

  constructor(from: DrawableMachine, to: DrawableMachine, opt = {color: 'black', output: null}) {
    this.from = from;
    this.to = to;
    this.outputLinked = opt.output;
    this.color = opt.color;
  }

  draw(layer: any) {
    const line = new Konva.Arrow({
      stroke: this.color,
      fill: this.color,
      points: [this.from.posX(), this.from.posY(), this.to.posX(), this.to.posY()],
      tension: 1,
      pointerLength: 10,
      pointerWidth: 12
    });
    layer.add(line);
    line.moveToBottom();
    this.element = line;
    layer.draw();
  }

  move(layer) {
    this.element.points([this.from.posX(), this.from.posY(), this.to.posX(), this.to.posY()]);
    layer.draw();
  }

  delete(layer) {
    this.from.removeLink(this);
    this.to.removeLink(this);
    this.element.remove();
    layer.draw();
  }
}
