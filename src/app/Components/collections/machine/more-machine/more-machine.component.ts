import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Machine} from '../../../../Model/Machine';

@Component({
  selector: 'app-more-machine',
  templateUrl: './more-machine.component.html',
  styleUrls: ['./more-machine.component.css']
})
export class MoreMachineComponent implements OnInit {
  @Input() machine: Machine;
  @Output() close = new EventEmitter<any>();
  @Output() edit = new EventEmitter<Machine>();
  @Output() delete = new EventEmitter<Machine>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete(e: Machine) {
    this.delete.emit(e);
  }

  onEdit(e: Machine) {
    this.edit.emit(e);
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }
}
