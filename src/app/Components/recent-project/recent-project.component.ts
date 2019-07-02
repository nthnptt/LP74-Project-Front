import {Component, OnInit} from '@angular/core';
import {Project} from '../../Model/Project';
import {projectsFixtures} from '../../Model/Fixtures';

@Component({
  selector: 'app-recent-project',
  templateUrl: './recent-project.component.html',
  styleUrls: ['./recent-project.component.css']
})
export class RecentProjectComponent implements OnInit {
  projects: Project[];

  constructor() {
    this.projects = projectsFixtures;
  }

  ngOnInit() {
  }

}
