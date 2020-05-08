import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesdetailsComponent } from './coursesdetails.component';

describe('CoursesdetailsComponent', () => {
  let component: CoursesdetailsComponent;
  let fixture: ComponentFixture<CoursesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
