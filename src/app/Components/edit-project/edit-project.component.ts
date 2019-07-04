import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../Model/Project';
import {Machine} from '../../Model/Machine';
import {WorkspaceService} from './workspace/workspace.service';
import {DrawableMachine} from './workspace/drawable/DrawableMachine';
import {OutputMat} from '../../Model/OutputMat';
import {ProjectService} from "../../Services/project.service";

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
  private projetservice: ProjectService;

  constructor(private route: ActivatedRoute, private service: WorkspaceService) {
    this.machines = [];
    this.projetservice = new ProjectService();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projetservice.get(parseInt(id));
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
