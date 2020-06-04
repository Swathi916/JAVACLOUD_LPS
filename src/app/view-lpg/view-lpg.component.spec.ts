import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLpgComponent } from './view-lpg.component';

describe('ViewLpgComponent', () => {
  let component: ViewLpgComponent;
  let fixture: ComponentFixture<ViewLpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
