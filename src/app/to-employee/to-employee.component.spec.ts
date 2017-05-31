import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEmployeeComponent } from './to-employee.component';

describe('ToEmployeeComponent', () => {
  let component: ToEmployeeComponent;
  let fixture: ComponentFixture<ToEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
