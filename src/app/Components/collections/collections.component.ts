import {Component, OnInit} from '@angular/core';
import {Material} from '../../Model/Material';
import {Engine} from '../../Model/Engine';

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
  focusEngine: Engine;
  createdEngineMode: boolean;
  createdMaterialMode: boolean;
  mode: Mode;
  Mode = Mode;
  editEngine: Engine;
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
    if (this.focusEngine) {
      this.focusEngine = null;
    }
  }


  onFocusMaterial(m: Material) {
    this.focusMaterial = m;
  }

  onNew() {
    switch (this.mode) {
      case Mode.ENGINE:
        this.createdEngineMode = true;
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

  onFocusEngine(engine: Engine) {
    this.reset();
    this.focusEngine = engine;
  }

  reset() {
    this.createdMaterialMode = false;
    this.focusMaterial = null;
    this.focusEngine = null;
    this.createdEngineMode = false;
    this.filter = '';
    this.editEngine = null;
    this.editMaterial = null;

  }

  onEditEngine(e: Engine) {
    this.onCloseMore();
    this.createdEngineMode = true;
    this.editEngine = e;
  }

  onEditMaterial(e: Material) {
    this.onCloseMore();
    this.createdMaterialMode = true;
    this.editMaterial = e;
    console.log(e)
  }
}
