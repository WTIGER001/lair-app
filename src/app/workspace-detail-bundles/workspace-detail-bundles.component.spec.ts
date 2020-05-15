import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDetailBundlesComponent } from './workspace-detail-bundles.component';

describe('WorkspaceDetailBundlesComponent', () => {
  let component: WorkspaceDetailBundlesComponent;
  let fixture: ComponentFixture<WorkspaceDetailBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceDetailBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceDetailBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
