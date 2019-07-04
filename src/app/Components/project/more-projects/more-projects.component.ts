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
  @Output() delete = new EventEmitter<Project>();
  @Output() edit = new EventEmitter<Project>();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('document:keyup.escape')
  onClose() {
    this.close.emit();
  }

  onDelete(p: Project) {
    this.delete.emit(p);
  }

  onEdit(p: Project) {
    this.delete.emit(p);

  }
}
