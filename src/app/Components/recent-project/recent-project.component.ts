import {Component, OnInit} from '@angular/core';
import {Project} from '../../Model/Project';
import {projectsFixtures} from '../../Model/Fixtures';
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-recent-project',
  templateUrl: './recent-project.component.html',
  styleUrls: ['./recent-project.component.css']
})
export class RecentProjectComponent implements OnInit {
  projects: Project[];

  constructor() {
    const service = new ProjectService();
    this.projects = service.getAll();
    this.projects = this.projects.slice(0, 4)
  }

  ngOnInit() {
  }

}
