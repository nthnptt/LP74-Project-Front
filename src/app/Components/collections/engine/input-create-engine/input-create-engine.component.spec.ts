import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreateEngineComponent } from './input-create-engine.component';

describe('InputCreateEngineComponent', () => {
  let component: InputCreateEngineComponent;
  let fixture: ComponentFixture<InputCreateEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCreateEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreateEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
