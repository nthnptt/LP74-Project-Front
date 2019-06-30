import {Component, OnInit} from '@angular/core';
import {Engine} from '../../../Model/Engine';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css', '../../../tables.css']
})
export class EngineComponent implements OnInit {
  Engines: Engine[];

  constructor() {
  }

  ngOnInit() {
  }

}
