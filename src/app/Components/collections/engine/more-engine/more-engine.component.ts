import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Engine} from '../../../../Model/Engine';

@Component({
  selector: 'app-more-engine',
  templateUrl: './more-engine.component.html',
  styleUrls: ['./more-engine.component.css']
})
export class MoreEngineComponent implements OnInit {
  @Input() engine: Engine;
  @Output() close = new EventEmitter<any>();
  @Output() edit = new EventEmitter<Engine>();

  constructor() {
  }

  ngOnInit() {
  }

  onDelete() {
  }

  onEdit(e: Engine) {
    this.edit.emit(e);
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }
}
