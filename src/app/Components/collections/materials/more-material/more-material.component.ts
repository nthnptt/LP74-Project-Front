import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../../Model/Material';
import {MaterialService} from '../../../../Services/material.service';

@Component({
  selector: 'app-more-material',
  templateUrl: './more-material.component.html',
  styleUrls: ['./more-material.component.css']
})
export class MoreMaterialComponent implements OnInit {
  @Input() material: Material;
  @Output() close = new EventEmitter<any>();
  @Output() edit = new EventEmitter<Material>();
  @Output() delete = new EventEmitter<Material>();
  constructor() {
  }

  ngOnInit() {
  }

  onDelete(e: Material) {
    this.delete.emit(e);
  }

  onEdit(e: Material) {
    this.edit.emit(e);
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }
}
