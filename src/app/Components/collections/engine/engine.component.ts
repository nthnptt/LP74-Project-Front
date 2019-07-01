import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Engine} from '../../../Model/Engine';
import {Material} from '../../../Model/Material';
import {engineFixtures, materialFixtures} from '../../../Model/Fixtures';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css', '../../../tables.css']
})
export class EngineComponent implements OnInit {
  engines: Engine[];
  @Output() focus = new EventEmitter<Engine>();

  @Input() filter: string;
  constructor() {
    this.engines = engineFixtures;
  }

  ngOnInit() {
  }

  onClick(material: Engine, $event) {
    this.focus.emit(material);
    $event.stopPropagation();
  }

  elementFilter(): Engine[] {
    return this.engines.filter((m: Material) => {
        return m.name.toLowerCase().match(this.filter.toLowerCase() + '.*');
      }
    );
  }
}
