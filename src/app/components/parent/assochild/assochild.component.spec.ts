import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssochildComponent } from './assochild.component';

describe('AssochildComponent', () => {
  let component: AssochildComponent;
  let fixture: ComponentFixture<AssochildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssochildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
