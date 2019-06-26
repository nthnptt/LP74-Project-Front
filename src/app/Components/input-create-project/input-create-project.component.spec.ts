import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreateProjectComponent } from './input-create-project.component';

describe('InputCreateProjectComponent', () => {
  let component: InputCreateProjectComponent;
  let fixture: ComponentFixture<InputCreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCreateProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
