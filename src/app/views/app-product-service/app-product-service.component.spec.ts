import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductServiceComponent } from './app-product-service.component';

describe('AppProductServiceComponent', () => {
  let component: AppProductServiceComponent;
  let fixture: ComponentFixture<AppProductServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
