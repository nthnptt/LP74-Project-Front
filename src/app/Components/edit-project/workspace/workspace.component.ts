import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import * as konva from 'konva';
import {Machine} from '../../../Model/Machine';
import {DrawableMachine} from './drawable/DrawableMachine';
import {machineFixtures} from '../../../Model/Fixtures';
import {WorkspaceService} from './workspace.service';
import {OutputMat} from '../../../Model/OutputMat';

const Konva: any = konva;

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @Output() focus = new EventEmitter<DrawableMachine>();
  @Output() linked = new EventEmitter<any>();
  stage: any;
  layer: any;
  machines: DrawableMachine[];
  selected: DrawableMachine;
  linkMode: boolean;
  outLink: OutputMat;
  colorLink: string;

  constructor(private service: WorkspaceService) {
    this.linkMode = false;
    this.machines = [];
    service.addCallbackM((element: Machine) => {
      const drawable = new DrawableMachine(element);
      this.machines.push(drawable);
      drawable.draw(this.layer);
      drawable.addClickEvent(($event, target: DrawableMachine) => {
        this.clickLoop($event, target);
      });
    });
    this.service.addCallbackLinkMode((color, out: OutputMat) => {
      this.linkMode = true;
      this.outLink = out;
      this.colorLink = color;
    });
  }

  ngOnInit() {
    const container = document.querySelector('#workspace-canvas');
    this.stage = new Konva.Stage({
      container: '#workspace-canvas',
      width: container.getBoundingClientRect().width,
      height: container.getBoundingClientRect().height
    });
    this.stage.draggable(true);
    this.draw();
  }

  draw() {
    this.stage.destroyChildren();
    this.layer = new Konva.Layer();
    const e = new DrawableMachine(machineFixtures[0], {x: 200, y: 200});
    const e2 = new DrawableMachine(machineFixtures[1]);
    this.machines.push(e);
    this.machines.push(e2);
    this.machines.forEach((drawable: DrawableMachine) => {
      drawable.draw(this.layer);
      drawable.addClickEvent(($event, target: DrawableMachine) => {
        this.clickLoop($event, target);
      });
    });
    e2.link(e, this.layer);
    this.layer.clearBeforeDraw(true);
    this.stage.add(this.layer);
    this.layer.draw();
  }

  clickLoop($event, target: DrawableMachine) {
    if (this.linkMode) {
      this.selected.link(target, this.layer, {output: this.outLink, color: this.colorLink});
      this.linkMode = false;
      this.colorLink = 'black';
      this.outLink = null;
      this.linked.emit();
    } else {
      if (this.selected) {
        this.selected.unselected(this.layer);
      }
      this.selected = target;
      target.selected(this.layer);
      this.focus.emit(target);
    }
  }

  @HostListener('document:keyup.delete', ['$event'])
  deleteFocus() {
    if (this.selected) {
      this.selected.delete(this.layer);
      this.selected = null;
      this.focus.emit(null);
    }
  }
}
