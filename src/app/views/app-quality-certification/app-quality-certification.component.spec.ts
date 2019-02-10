import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppQualityCertificationComponent } from './app-quality-certification.component';

describe('AppQualityCertificationComponent', () => {
  let component: AppQualityCertificationComponent;
  let fixture: ComponentFixture<AppQualityCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppQualityCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppQualityCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
