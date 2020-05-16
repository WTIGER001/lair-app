import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBtnComponent } from './image-btn.component';

describe('ImageBtnComponent', () => {
  let component: ImageBtnComponent;
  let fixture: ComponentFixture<ImageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
