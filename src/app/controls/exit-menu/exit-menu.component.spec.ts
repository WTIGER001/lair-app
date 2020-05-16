import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitMenuComponent } from './exit-menu.component';

describe('ExitMenuComponent', () => {
  let component: ExitMenuComponent;
  let fixture: ComponentFixture<ExitMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
