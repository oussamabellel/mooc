import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcreditsComponent } from './addcredits.component';

describe('AddcreditsComponent', () => {
  let component: AddcreditsComponent;
  let fixture: ComponentFixture<AddcreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
