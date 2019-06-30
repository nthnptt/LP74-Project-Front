import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Material} from '../../../../../Model/Material';

@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.component.html',
  styleUrls: ['./modal-material.component.css']
})
export class ModalMaterialComponent implements OnInit {
  @Output() select = new EventEmitter<Material>();
  @Output() close = new EventEmitter<any>();
  filter: string;

  constructor() {
  }

  ngOnInit() {
    this.filter = '';
  }


  @HostListener('document:keyup.escape', ['$event'])
  onClose($event: any) {
    this.close.emit();
    $event.stopPropagation();
  }

  onSelectMaterial(material: Material) {
    this.select.emit(material);
  }

}
