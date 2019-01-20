import { Component, OnInit } from '@angular/core';
import { About } from '../../models/aboutus';

@Component({
  selector: 'app-app-about-us',
  templateUrl: './app-about-us.component.html',
  styleUrls: ['./app-about-us.component.css']
})
export class AppAboutUsComponent implements OnInit {

  abouts: About[];
  currentItem: About;
  choosedIndex = 0;
  constructor() { }

  ngOnInit() {
    this.abouts = [
      {
        title: '企业简介',
        content: '北京铭丰广润商贸有限公司是一家……'
      },
      {
        title: '企业历史',
        content: '企业历史……'
      },
      {
        title: '企业文化',
        content: '企业文化……'
      },
    ];
    this.currentItem = this.abouts[0];
  }

  selectAbout(item, i) {
    this.currentItem = item;
    this.choosedIndex = i;
    console.log(i);
  }

}
