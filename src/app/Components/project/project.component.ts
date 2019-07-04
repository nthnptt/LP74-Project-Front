import {Component, OnInit} from '@angular/core';
import {Project} from '../../Model/Project';
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../../tables.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  focus: Project;
  filter = '';
  createmode: boolean;
  private service: ProjectService;

  constructor() {
    this.createmode = false;
    this.focus = null;
    this.service = new ProjectService();
    this.updateData();
  }

  ngOnInit() {
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

  projectsFilter(): Project[] {
    return this.projects.filter((p: Project) => {
        return p.name.match(this.filter + '.*');
      }
    );
  }

  private updateData() {
    this.projects = this.service.getAll();

  }

  onCloseCreate() {
    this.updateData();
    this.createmode = false;
  }

  onDelete(p: Project){
    this.service.delete(p);
    this.updateData();
    this.onCloseMore();
  }

  onEdit(p: Project) {
    this.updateData();
    this.onCloseMore();
  }
}
