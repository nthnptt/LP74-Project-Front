import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  @Output() newProject = new EventEmitter<any>();  // <!-- Voici l'output
  constructor() {
  }

  ngOnInit() {
  }

  onNewProject() {
    console.log('s1');
    this.newProject.emit();
  }

}
