import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllstudent } from './view-allstudent';

describe('ViewAllstudent', () => {
  let component: ViewAllstudent;
  let fixture: ComponentFixture<ViewAllstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllstudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllstudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
