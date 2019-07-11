import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildresultsComponent } from './childresults.component';

describe('ChildresultsComponent', () => {
  let component: ChildresultsComponent;
  let fixture: ComponentFixture<ChildresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
