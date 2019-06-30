import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreateMaterialComponent } from './input-create-material.component';

describe('InputCreateMaterialComponent', () => {
  let component: InputCreateMaterialComponent;
  let fixture: ComponentFixture<InputCreateMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCreateMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
