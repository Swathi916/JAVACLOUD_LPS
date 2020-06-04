import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLpgComponent } from './edit-lpg.component';

describe('EditLpgComponent', () => {
  let component: EditLpgComponent;
  let fixture: ComponentFixture<EditLpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
