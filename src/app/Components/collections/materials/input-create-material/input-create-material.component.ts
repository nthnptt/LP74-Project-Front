import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {materialFixtures} from '../../../../Model/Fixtures';
import UserSession from '../../../../Model/UserSession';

@Component({
  selector: 'app-input-create-material',
  templateUrl: './input-create-material.component.html',
  styleUrls: ['./input-create-material.component.css', '../../../../forms.css']
})
export class InputCreateMaterialComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  form = new FormGroup({
    materialname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() {

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
    const material = {
      id: materialFixtures.length + 1,
      name: this.materialname.value,
      author: UserSession.get().getUser().name,
      lastUpdate: 'today',
    };
    materialFixtures.push(material);
    this.onClose();
  }}
