import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUsermenuComponent } from './nav-usermenu.component';

describe('NavUsermenuComponent', () => {
  let component: NavUsermenuComponent;
  let fixture: ComponentFixture<NavUsermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUsermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUsermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
