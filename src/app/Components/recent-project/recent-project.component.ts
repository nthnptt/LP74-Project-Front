import { Component, OnInit } from '@angular/core';
import {Project} from '../../Model/Project';

@Component({
  selector: 'app-recent-project',
  templateUrl: './recent-project.component.html',
  styleUrls: ['./recent-project.component.css']
})
export class RecentProjectComponent implements OnInit {
  projects: Project[];
  constructor() {
    this.projects = [
      {name: 'Test A'},
      {name: 'Test B'},
      {name: 'Test C'},
      {name: 'Test D'},
    ];
  }

  ngOnInit() {
  }

}
