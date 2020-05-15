import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCodingComponent } from './workspace-coding.component';

describe('WorkspaceCodingComponent', () => {
  let component: WorkspaceCodingComponent;
  let fixture: ComponentFixture<WorkspaceCodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceCodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
