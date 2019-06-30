import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../Model/Material';
import {materialFixtures} from '../../../Model/Fixtures';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css', '../../../tables.css']
})
export class MaterialsComponent implements OnInit {
  materials: Material[];
  @Output() focus = new EventEmitter<Material>();

  @Input() filter: string;
  constructor() {
    this.materials = materialFixtures;
  }

  ngOnInit() {
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
