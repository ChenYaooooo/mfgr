import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAutoPlayComponent } from './image-auto-play.component';

describe('ImageAutoPlayComponent', () => {
  let component: ImageAutoPlayComponent;
  let fixture: ComponentFixture<ImageAutoPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAutoPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAutoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
