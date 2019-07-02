import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {machineFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';
import {Machine} from '../../../../Model/Machine';
import {InputMat} from '../../../../Model/InputMat';
import {OutputMat} from '../../../../Model/OutputMat';
import {Material} from '../../../../Model/Material';

enum CreateMode {
  IN,
  OUT
}

@Component({
  selector: 'app-input-create-machine',
  templateUrl: './input-create-machine.component.html',
  styleUrls: ['./input-create-machine.component.css', '../../../../forms.css']
})
export class InputCreateMachineComponent implements OnInit, OnChanges {
  @Output() close = new EventEmitter<any>();
  @Input() object: Machine;
  machine = new Machine();

  form = new FormGroup({
    machinename: new FormControl(this.machine.name, [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  isSelectedMaterial: boolean;
  createMode: CreateMode;

  constructor() {
    this.createMode = null;
  }

  get machinename() {
    return this.form.get('machinename');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }
    if (this.isCreate()) {
      this.create();
    } else {
      this.update();
    }
    this.onClose();
  }

  update() {
    this.machine.name = this.machinename.value;
    const machine = machineFixtures.find((e: Machine) => {
      return this.machine.id === e.id;
    });
    if (machine) {
      machine.name = this.machine.name;
      machine.author = this.machine.author;
      machine.lastUpdate = 'now';
      machine.inputs = this.machine.inputs;
      machine.outputs = this.machine.outputs;
    }
  }

  create() {
    this.machine.name = this.machinename.value;
    this.machine.author = UserSession.get().getUser().name;
    this.machine.lastUpdate = 'now';
    this.onClose();
    machineFixtures.push(this.machine);
  }

  @HostListener('document:keyup.escape')
  onClose() {
    if (!this.isSelectedMaterial) {
      this.close.emit();
    }
  }

  onDeleteInput(inp: InputMat) {
    this.machine.inputs = this.machine.inputs.filter((i: InputMat) => {
      return i !== inp;
    });
  }

  onAddInput() {
    this.isSelectedMaterial = true;
    this.createMode = CreateMode.IN;
  }

  onAddOutput() {
    this.isSelectedMaterial = true;
    this.createMode = CreateMode.OUT;
  }

  updateInputNumber(inp: InputMat, needed: number) {
    inp.needed = needed;
  }

  onDeleteOuput(out: OutputMat) {
    this.machine.outputs = this.machine.outputs.filter((o: OutputMat) => {
      return o !== out;
    });
  }

  onSelectMaterial(material: Material) {
    if (material.name) {
      switch (this.createMode) {
        case CreateMode.IN:
          this.machine.inputs.push({material, needed: 1});
          break;
        case CreateMode.OUT:
          this.machine.outputs.push({material, number: 1, time: 0});
          break;
      }
      this.isSelectedMaterial = false;
      this.createMode = null;
    }
  }

  updateOutputNumber(out: OutputMat, $event: number) {
    out.number = $event;
  }

  updateOutputTime(out: OutputMat, $event: number) {
    out.time = $event;
  }

  ngOnChanges(changes: SimpleChanges) {
    const object: SimpleChange = changes.object;
    this.object = object.currentValue;
    if (this.object) {
      this.machine = JSON.parse(JSON.stringify(this.object));
      this.form.controls.machinename.setValue(this.machine.name);
    } else {
      this.machine = new Machine();
    }
  }

  private isCreate() {
    return this.machine.id === null;
  }
}
