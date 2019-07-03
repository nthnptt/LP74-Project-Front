import {Component, OnInit} from '@angular/core';
import {Material} from '../../Model/Material';
import {Machine} from '../../Model/Machine';

enum Mode {
  CONVEYER,
  MATERIAL,
  ENGINE
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css', '../../tables.css']
})
export class CollectionsComponent implements OnInit {
  filter = '';
  focusMaterial: Material;
  focusMachine: Machine;
  createdMachineMode: boolean;
  createdMaterialMode: boolean;
  mode: Mode;
  Mode = Mode;
  editMachine: Machine;
  editMaterial: Material;

  constructor() {
    this.mode = Mode.ENGINE;
  }

  ngOnInit() {
  }

  onCloseMore() {
    if (this.focusMaterial) {
      this.focusMaterial = null;
    }
    if (this.focusMachine) {
      this.focusMachine = null;
    }
  }


  onFocusMaterial(m: Material) {
    this.focusMaterial = m;
  }

  onNew() {
    switch (this.mode) {
      case Mode.ENGINE:
        this.createdMachineMode = true;
        break;
      case Mode.MATERIAL:
        this.createdMaterialMode = true;
        break;
    }
  }

  onChangeMode(mode: Mode) {
    this.mode = mode;
    this.reset();
  }

  onFocusMachine(machine: Machine) {
    this.reset();
    this.focusMachine = machine;
  }

  reset() {
    this.createdMaterialMode = false;
    this.focusMaterial = null;
    this.focusMachine = null;
    this.createdMachineMode = false;
    this.filter = '';
    this.editMachine = null;
    this.editMaterial = null;

  }

  onEditMachine(e: Machine) {
    this.onCloseMore();
    this.createdMachineMode = true;
    this.editMachine = e;
  }

  onEditMaterial(e: Material) {
    this.onCloseMore();
    this.createdMaterialMode = true;
    this.editMaterial = e;
    console.log(e);
  }
}
