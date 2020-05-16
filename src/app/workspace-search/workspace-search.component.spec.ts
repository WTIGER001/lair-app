import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSearchComponent } from './workspace-search.component';

describe('WorkspaceSearchComponent', () => {
  let component: WorkspaceSearchComponent;
  let fixture: ComponentFixture<WorkspaceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
