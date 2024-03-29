import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../Model/Material';
import {materialFixtures} from '../../../Model/Fixtures';
import {MaterialService} from '../../../Services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css', '../../../tables.css']
})
export class MaterialsComponent implements OnInit {
  materials: Material[];
  @Output() focus = new EventEmitter<Material>();
  @Input() needUpdate: EventEmitter<any>;

  @Input() filter = '';
  @Input() expandMode = true;
  service: MaterialService;

  constructor() {
    this.service = new MaterialService();
    this.refreshData();
  }

  refreshData() {
    this.materials = this.service.getAll();
  }

  ngOnInit() {
    if(this.needUpdate){
      this.needUpdate.subscribe(() => {
        this.refreshData();
      });
    }
  }

  onClick(material: Material, $event) {
    this.focus.emit(material);
    $event.stopPropagation();
  }

  elementFilter(): Material[] {
    return this.materials.filter((m: Material) => {
        return m.name.toLowerCase().match(this.filter.toLowerCase() + '.*');
      }
    );
  }
}
