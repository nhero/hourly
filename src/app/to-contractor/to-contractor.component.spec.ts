import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToContractorComponent } from './to-contractor.component';

describe('ToContractorComponent', () => {
  let component: ToContractorComponent;
  let fixture: ComponentFixture<ToContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
