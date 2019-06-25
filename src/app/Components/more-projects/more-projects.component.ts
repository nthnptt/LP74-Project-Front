import { Component, OnInit } from '@angular/core';
import {Project} from '../../Model/Project';
import {projectsFixtures} from '../../Model/Fixtures';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.css']
})
export class MoreProjectsComponent implements OnInit {
  projet: Project;
  constructor() {
    this.projet = projectsFixtures[0];
  }

  ngOnInit() {
  }

  onClose() {
    console.log('close');
  }
}
