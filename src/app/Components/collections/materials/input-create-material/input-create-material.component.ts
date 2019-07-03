import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {engineFixtures, materialFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';
import {Material} from '../../../../Model/Material';
import {Engine} from '../../../../Model/Engine';
import {MaterialService} from '../../../../Services/material.service';

@Component({
  selector: 'app-input-create-material',
  templateUrl: './input-create-material.component.html',
  styleUrls: ['./input-create-material.component.css', '../../../../forms.css']
})
export class InputCreateMaterialComponent implements OnInit, OnChanges {
  @Output() close = new EventEmitter<any>();
  @Input() object: Material;
  material = new Material();
  form = new FormGroup({
    materialname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  private service: MaterialService;

  constructor() {
    this.service = new MaterialService();

  }

  ngOnInit() {
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }

  get materialname() {
    return this.form.get('materialname');
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

  create() {
    const material = new Material();
    material.name = this.materialname.value;
    material.author = UserSession.get().getUser().name;
    material.lastUpdate = 'today';
    this.service.post(material);
  }

  update() {
    const material = new Material();
    material.name = this.materialname.value;
    material.author = this.material.author;
    material.lastUpdate = 'now';
    material.id = this.material.id;
    this.service.put(material);
  }

  ngOnChanges(changes: SimpleChanges) {
    const object: SimpleChange = changes.object;
    this.object = object.currentValue;
    if (this.object) {
      this.material = JSON.parse(JSON.stringify(this.object));
      this.form.controls.materialname.setValue(this.material.name);
    } else {
      this.material = new Material();
    }
  }

  isCreate() {
    return this.material.id === null;
  }
}
