import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {projectsFixtures} from '../Model/Fixtures';
import {Project} from '../Model/Project';

enum Mode {
  CONVEYER,
  MATERIAL,
  ENGINE
}

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  private project: Project;
  public Mode = Mode;
  public mode: Mode;

  constructor(private route: ActivatedRoute) {
    this.mode = Mode.ENGINE;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projectsFixtures[id];
  }

  onChangeMode(m: Mode) {
    this.mode = m;
  }
}
