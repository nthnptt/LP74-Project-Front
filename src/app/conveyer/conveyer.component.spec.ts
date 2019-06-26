import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyerComponent } from './conveyer.component';

describe('ConveyerComponent', () => {
  let component: ConveyerComponent;
  let fixture: ComponentFixture<ConveyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
