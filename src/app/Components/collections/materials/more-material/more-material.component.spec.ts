import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMaterialComponent } from './more-material.component';

describe('MoreMaterialComponent', () => {
  let component: MoreMaterialComponent;
  let fixture: ComponentFixture<MoreMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
