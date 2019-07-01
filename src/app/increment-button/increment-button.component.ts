import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.css']
})
export class IncrementButtonComponent implements OnInit {
  @Output() update = new EventEmitter<number>();
  value: number;
  @Input() lowLimit?: number;
  @Input() defaultValue = 0;
  @Input() hightLimit?: number;

  constructor() {
    this.value = 0;
  }

  ngOnInit() {
    this.value = this.defaultValue;
  }

  onPlus() {
    if (this.hightLimit) {
      if (this.hightLimit > this.value) {
        this.value++;
      }
    } else {
      this.value++;
    }
    this.onUpdate();
  }

  onMinus() {
    if (this.lowLimit) {
      if (this.lowLimit < this.value) {
        this.value--;
      }
    } else {
      this.value--;
    }
    this.onUpdate();
  }

  onUpdate() {
    this.update.emit(this.value);
  }
}
