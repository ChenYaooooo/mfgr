import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSwiperComponent } from './dashboard-swiper.component';

describe('DashboardSwiperComponent', () => {
  let component: DashboardSwiperComponent;
  let fixture: ComponentFixture<DashboardSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
