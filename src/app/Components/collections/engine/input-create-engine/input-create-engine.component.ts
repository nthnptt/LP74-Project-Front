import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {engineFixtures, materialFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';
import {Engine} from '../../../../Model/Engine';
import {Material} from '../../../../Model/Material';
import {Input} from '../../../../Model/Input';

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

  constructor() {
    this.engine = new Engine();
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
    this.close.emit();
  }

  onDeleteInput() {
  }

  onAddInput() {
    this.engine.inputs.push({material: materialFixtures[0], needed: 1});
  }

  onAddOutput() {
    this.engine.outputs.push({material: materialFixtures[0], number: 1, time: 0});
  }

  updateInputNumber(inp: Input, needed: number) {
    inp.needed = needed;
  }
}
