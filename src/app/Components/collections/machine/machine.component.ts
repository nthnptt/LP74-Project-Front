import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Machine} from '../../../Model/Machine';
import {Material} from '../../../Model/Material';
import {MachineService} from "../../../Services/machine.service";

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
  private service: MachineService;
  @Input() needUpdate: EventEmitter<any>;


  constructor() {
    this.service = new MachineService();
    this.refreshData();
  }

  ngOnInit() {
    if (this.needUpdate) {
      this.needUpdate.subscribe(() => {
        this.refreshData();
      });
    }
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

  refreshData() {
    this.machines = this.service.getAll();

  }
}
