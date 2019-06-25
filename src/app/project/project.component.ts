import { Component, OnInit } from '@angular/core';
import {Project} from '../Model/Project';
import {projectsFixtures} from '../Model/Fixtures';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../tables.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = projectsFixtures;
  }

  ngOnInit() {
  }

  onDelete(p: Project) {
    console.log('Delete');
  }

  onInfo(p: Project) {
    console.log('Info');
  }
}
