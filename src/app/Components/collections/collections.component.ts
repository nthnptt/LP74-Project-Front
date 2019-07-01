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

  constructor() {
    this.mode = Mode.ENGINE;
    this.createdEngineMode= true;
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
  }
}
