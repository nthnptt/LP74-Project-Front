import {Component, OnInit} from '@angular/core';
import {Project} from '../Model/Project';
import {projectsFixtures} from '../Model/Fixtures';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../tables.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  focus: Project;
  filter = '';
  createmode: boolean;

  constructor() {
    this.projects = projectsFixtures;
    this.createmode = false;
    this.focus = null;
  }

  ngOnInit() {
  }

  onDelete(p: Project) {
    console.log('Delete');
  }

  onInfo(p: Project, $event) {
    this.focus = p;
    $event.stopPropagation();
  }

  onNew() {
    this.createmode = true;
  }

  onCloseMore() {
    if (this.focus) {
      this.focus = null;
    }
  }

  isFiltered(): boolean {
    return true;
  }

  projectsFilter(): Project[] {
    const result = this.projects.filter((p: Project) => {
        return p.name.match(this.filter + '.*');
      }
    );
    console.log(result);
    return result;
  }
}
