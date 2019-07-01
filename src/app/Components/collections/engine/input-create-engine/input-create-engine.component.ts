import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {engineFixtures, materialFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';
import {Engine} from '../../../../Model/Engine';
import {Input} from '../../../../Model/Input';
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
export class InputCreateEngineComponent implements OnInit {
  @Output() close = new EventEmitter<any>();

  form = new FormGroup({
    enginename: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  engine: Engine;
  isSelectedMaterial: boolean;
  createMode: CreateMode;

  constructor() {
    this.engine = new Engine();
    this.createMode = null;
  }

  ngOnInit() {
  }

  get enginename() {
    return this.form.get('enginename');
  }

  onSubmit() {
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

  onDeleteInput(inp: Input) {
    this.engine.inputs = this.engine.inputs.filter((i: Input) => {
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

  updateInputNumber(inp: Input, needed: number) {
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
}
