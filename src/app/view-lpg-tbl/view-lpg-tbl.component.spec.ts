import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLpgTblComponent } from './view-lpg-tbl.component';

describe('ViewLpgTblComponent', () => {
  let component: ViewLpgTblComponent;
  let fixture: ComponentFixture<ViewLpgTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLpgTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLpgTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
