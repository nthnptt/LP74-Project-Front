import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-create-project',
  templateUrl: './input-create-project.component.html',
  styleUrls: ['./input-create-project.component.css', '../forms.css']
})
export class InputCreateProjectComponent implements OnInit {
  @Output() close = new EventEmitter<any>();  // <!-- Voici l'output

  form = new FormGroup({
    projectname: new FormControl('', [
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

  get projectname() {
    return this.form.get('projectname');
  }

  onSubmit() {
    console.log(this.projectname.value);
  }
}
