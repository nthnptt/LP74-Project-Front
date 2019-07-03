import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import UserSession from '../../../Model/UserSession';
import {projectsFixtures} from '../../../Model/Fixtures';
import {ProjectService} from "../../../Services/project.service";
import {Project} from "../../../Model/Project";

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
  private service: ProjectService;

  constructor() {
    this.service = new ProjectService();
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
    const project = new Project();
    project.name = this.projectname.value;
    project.author = UserSession.get().getUser().name;
    project.lastUpdate = 'today';
    project.inputs = [];
    project.outputs = [];
    this.service.post(project);
    this.onClose();
  }
}
