import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildchartsComponent } from './childcharts.component';

describe('ChildchartsComponent', () => {
  let component: ChildchartsComponent;
  let fixture: ComponentFixture<ChildchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
