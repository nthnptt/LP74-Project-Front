import { Component, OnInit } from '@angular/core';
import {Material} from '../Model/Material';
import {projectsFixtures} from '../Model/Fixtures';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css', '../tables.css']
})
export class MaterialsComponent implements OnInit {
  materials: Material[];

  constructor() { }

  ngOnInit() {
  }

}
