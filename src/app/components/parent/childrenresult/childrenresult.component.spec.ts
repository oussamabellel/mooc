import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenresultComponent } from './childrenresult.component';

describe('ChildrenresultComponent', () => {
  let component: ChildrenresultComponent;
  let fixture: ComponentFixture<ChildrenresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
