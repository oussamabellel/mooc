import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsdetailsComponent } from './resultsdetails.component';

describe('ResultsdetailsComponent', () => {
  let component: ResultsdetailsComponent;
  let fixture: ComponentFixture<ResultsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
