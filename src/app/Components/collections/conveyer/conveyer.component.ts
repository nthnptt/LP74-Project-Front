import { Component, OnInit } from '@angular/core';
import {Conveyer} from '../../../Model/Conveyer';

@Component({
  selector: 'app-conveyer',
  templateUrl: './conveyer.component.html',
  styleUrls: ['./conveyer.component.css', '../../../tables.css']
})
export class ConveyerComponent implements OnInit {
  Convoyers: Conveyer[];

  constructor() { }

  ngOnInit() {
  }

}
