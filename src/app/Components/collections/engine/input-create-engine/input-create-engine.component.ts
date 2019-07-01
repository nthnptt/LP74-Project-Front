import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {engineFixtures, materialFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';
import {Engine} from '../../../../Model/Engine';
import {MaterialInput} from '../../../../Model/MaterialInput';
import {OutputMat} from '../../../../Model/OutputMat';
import {Material} from '../../../../Model/Material';

enum CreateMode {
  IN,
  OUT
}

@Component({
  selector: 'app-input-create-engine',
  templateUrl: './input-create-engine.component.html',
  styleUrls: ['./input-create-engine.component.css', '../../../../forms.css']
})
export class InputCreateEngineComponent implements OnInit, OnChanges {
  @Output() close = new EventEmitter<any>();
  @Input() object: Engine;
  isCreate: boolean;
  engine = new Engine();

  form = new FormGroup({
    enginename: new FormControl(this.engine.name, [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  isSelectedMaterial: boolean;
  createMode: CreateMode;

  constructor() {
    this.createMode = null;
  }

  ngOnInit() {
  }

  get enginename() {
    return this.form.get('enginename');
  }

  onSubmit() {
    if (this.isCreate) {
      this.create();
    } else {
      this.update();
    }
    this.onClose();
  }

  update() {
    this.engine.name = this.enginename.value;
    const engine = engineFixtures.find((e: Engine) => {
      return this.engine.id === e.id;
    });
    if (engine) {
      engine.name = this.engine.name;
      engine.author = this.engine.author;
      engine.lastUpdate = 'now';
      engine.inputs = this.engine.inputs;
      engine.outputs = this.engine.outputs;
    }
  }

  create() {
    this.engine.name = this.enginename.value;
    this.engine.author = UserSession.get().getUser().name;
    this.engine.lastUpdate = 'now';
    this.onClose();
    engineFixtures.push(this.engine);
  }

  @HostListener('document:keyup.escape')
  onClose() {
    if (!this.isSelectedMaterial) {
      this.close.emit();
    }
  }

  onDeleteInput(inp: MaterialInput) {
    this.engine.inputs = this.engine.inputs.filter((i: MaterialInput) => {
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

  updateInputNumber(inp: MaterialInput, needed: number) {
    inp.needed = needed;
  }

  onDeleteOuput(out: OutputMat) {
    this.engine.outputs = this.engine.outputs.filter((o: OutputMat) => {
      return o !== out;
    });
  }

  onSelectMaterial(material: Material) {
    if (material.name) {
      switch (this.createMode) {
        case CreateMode.IN:
          this.engine.inputs.push({material, needed: 1});
          break;
        case CreateMode.OUT:
          this.engine.outputs.push({material, number: 1, time: 0});
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
      this.isCreate = false;
      this.engine = JSON.parse(JSON.stringify(this.object));
      this.form.controls.enginename.setValue(this.engine.name);
    } else {
      this.isCreate = true;
      this.engine = new Engine();
    }
  }
}
