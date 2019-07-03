import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {projectsFixtures} from '../../Model/Fixtures';
import {Project} from '../../Model/Project';
import {Machine} from '../../Model/Machine';
import {WorkspaceService} from './workspace/workspace.service';
import {DrawableMachine} from './workspace/drawable/DrawableMachine';
import {OutputMat} from '../../Model/OutputMat';

const color = ['red', 'blue', 'yellow', 'black', 'white'];

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  filter = '';
  machines: Machine[];
  machineFocus: DrawableMachine;
  color = color;
  private project: Project;
  isLinkEditMode: boolean;

  constructor(private route: ActivatedRoute, private service: WorkspaceService) {
    this.machines = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projectsFixtures[id];
  }

  onClickProject(machine: Machine) {
    this.service.addMachine(machine);
  }

  onEditLinkMode(index: number, out: OutputMat) {
    this.isLinkEditMode = true;
    this.service.linkMode(this.color[index], out);
  }

  stopLinkEditMode() {
    this.isLinkEditMode = false;
  }
}
