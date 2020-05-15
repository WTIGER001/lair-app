import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceLaunchComponent } from './workspace-launch.component';

describe('WorkspaceLaunchComponent', () => {
  let component: WorkspaceLaunchComponent;
  let fixture: ComponentFixture<WorkspaceLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
