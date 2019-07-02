import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Machine} from '../../../Model/Machine';
import {Material} from '../../../Model/Material';
import {machineFixtures} from '../../../Model/Fixtures';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css', '../../../tables.css']
})
export class MachineComponent implements OnInit {
  machines: Machine[];
  @Output() focus = new EventEmitter<Machine>();
  @Input() detail = true;
  @Input() filter = '';

  constructor() {
    this.machines = machineFixtures;
  }

  ngOnInit() {
  }

  onClick(material: Machine, $event) {
    this.focus.emit(material);
    $event.stopPropagation();
  }

  elementFilter(): Machine[] {
    return this.machines.filter((m: Material) => {
        return m.name.toLowerCase().match(this.filter.toLowerCase() + '.*');
      }
    );
  }
}
