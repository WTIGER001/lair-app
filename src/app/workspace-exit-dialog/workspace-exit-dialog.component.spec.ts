import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceExitDialogComponent } from './workspace-exit-dialog.component';

describe('WorkspaceExitDialogComponent', () => {
  let component: WorkspaceExitDialogComponent;
  let fixture: ComponentFixture<WorkspaceExitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceExitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
