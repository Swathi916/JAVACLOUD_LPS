import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanLpgComponent } from './add-loan-lpg.component';

describe('AddLoanLpgComponent', () => {
  let component: AddLoanLpgComponent;
  let fixture: ComponentFixture<AddLoanLpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoanLpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanLpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
