import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolmoovComponent } from './schoolmoov.component';

describe('SchoolmoovComponent', () => {
  let component: SchoolmoovComponent;
  let fixture: ComponentFixture<SchoolmoovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolmoovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolmoovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
