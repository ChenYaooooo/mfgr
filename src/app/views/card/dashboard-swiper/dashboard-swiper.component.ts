import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
    selector: 'app-dashboard-swiper',
    templateUrl: './dashboard-swiper.component.html',
    styleUrls: ['./dashboard-swiper.component.css']
})
export class DashboardSwiperComponent implements AfterViewInit {
    testSwiper: Swiper;

    constructor() { }

    ngAfterViewInit() {
      var swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true,
        },
      });
      var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true,
        },
      });
    }
}
