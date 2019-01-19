import { Component, OnInit } from '@angular/core';
import { About } from '../../models/aboutus';

@Component({
  selector: 'app-app-product-service',
  templateUrl: './app-product-service.component.html',
  styleUrls: ['./app-product-service.component.css']
})
export class AppProductServiceComponent implements OnInit {
  abouts: About[];
  currentItem: About;
  constructor() { }

  ngOnInit() {
    this.abouts = [
      {
        title: '钢材贸易',
        content: '钢材贸易'
      },
      {
        title: '配件配套供应',
        content: '配件配套供应'
      },
      {
        title: '融资支持',
        content: '融资支持'
      },
      {
        title: '物流服务',
        content: '物流服务'
      },
      {
        title: '钢结构制作',
        content: '钢结构制作'
      },
    ];

    this.currentItem = this.abouts[0];
  }
  selectAbout(item) {
    this.currentItem = item;
  }
}
