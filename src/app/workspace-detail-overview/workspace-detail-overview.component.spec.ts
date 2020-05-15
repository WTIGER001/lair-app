import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDetailOverviewComponent } from './workspace-detail-overview.component';

describe('WorkspaceDetailOverviewComponent', () => {
  let component: WorkspaceDetailOverviewComponent;
  let fixture: ComponentFixture<WorkspaceDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceDetailOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
