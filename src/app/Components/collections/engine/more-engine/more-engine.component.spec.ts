import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEngineComponent } from './more-engine.component';

describe('MoreEngineComponent', () => {
  let component: MoreEngineComponent;
  let fixture: ComponentFixture<MoreEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
