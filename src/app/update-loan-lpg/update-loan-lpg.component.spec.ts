import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanLpgComponent } from './update-loan-lpg.component';

describe('UpdateLoanLpgComponent', () => {
  let component: UpdateLoanLpgComponent;
  let fixture: ComponentFixture<UpdateLoanLpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLoanLpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoanLpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
