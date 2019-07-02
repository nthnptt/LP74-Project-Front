import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import UserSession from '../../../Model/UserSession';
import {projectsFixtures} from '../../../Model/Fixtures';

@Component({
  selector: 'app-input-create-project',
  templateUrl: './input-create-project.component.html',
  styleUrls: ['./input-create-project.component.css', '../../../forms.css']
})
export class InputCreateProjectComponent implements OnInit {
  @Output() close = new EventEmitter<any>();

  form = new FormGroup({
    projectname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  constructor() {

  }

  get projectname() {
    return this.form.get('projectname');
  }

  ngOnInit() {
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }

  onSubmit() {
    const project = {
      id: projectsFixtures.length + 1,
      name: this.projectname.value,
      author: UserSession.get().getUser().name,
      lastUpdate: 'today',
      inputs: [],
      outputs: [],
    };
    projectsFixtures.push(project);
    this.onClose();
  }
}
