import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDetailDetailsComponent } from './workspace-detail-details.component';

describe('WorkspaceDetailDetailsComponent', () => {
  let component: WorkspaceDetailDetailsComponent;
  let fixture: ComponentFixture<WorkspaceDetailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceDetailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceDetailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
