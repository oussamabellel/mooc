import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildconnexionComponent } from './childconnexion.component';

describe('ChildconnexionComponent', () => {
  let component: ChildconnexionComponent;
  let fixture: ComponentFixture<ChildconnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildconnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
