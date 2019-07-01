import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../../Model/Material';

@Component({
  selector: 'app-more-material',
  templateUrl: './more-material.component.html',
  styleUrls: ['./more-material.component.css']
})
export class MoreMaterialComponent implements OnInit {
  @Input() material: Material;
  @Output() close = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
  }

  onEdit() {
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }
}
