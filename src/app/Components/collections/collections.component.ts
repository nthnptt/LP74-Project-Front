import {Component, OnInit} from '@angular/core';
import {Material} from '../../Model/Material';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css', '../../tables.css']
})
export class CollectionsComponent implements OnInit {
  filter = '';
  focusMaterial: Material;
  createdMaterialMode: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onCloseMore() {
    if (this.focusMaterial) {
      this.focusMaterial = null;
    }
  }


  onFocusMaterial(m: Material) {
    this.focusMaterial = m;
  }

  onNewMaterial() {
    this.createdMaterialMode = true;
  }
}
