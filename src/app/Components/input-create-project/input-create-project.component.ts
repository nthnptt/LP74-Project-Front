import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Input} from '../../Model/Input';
import UserSession from '../../Model/UserSession';
import {projectsFixtures} from '../../Model/Fixtures';

@Component({
  selector: 'app-input-create-project',
  templateUrl: './input-create-project.component.html',
  styleUrls: ['./input-create-project.component.css', '../../forms.css']
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
    const project =   {
      id: projectsFixtures.length+1,
      name: this.projectname.value,
      author: UserSession.get().getUser().name,
      lastUpdate: 'today',
      inputs: [],
      outputs: [],
    }
    projectsFixtures.push(project);
    this.onClose();
  }
}
