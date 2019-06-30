import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../../Model/Project';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.css']
})
export class MoreProjectsComponent implements OnInit {
  @Input() project: Project;
  @Output() close = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }

  onDelete() {
    console.log('delete');
  }

  onEdit() {
    console.log('delete');
  }
}
