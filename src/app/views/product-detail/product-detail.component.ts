import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../../models/product-detail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products1: ProductDetail[];
  products2: ProductDetail[];
  products3: ProductDetail[];
  constructor() { }

  ngOnInit() {
    this.products1 = [
      {
        title: '槽钢',
        icon: 'caogang.png',
        deliveryGurantee: true
      },
      {
        title: '45号圆钢',
        icon: 'yuangang45.png',
        deliveryGurantee: true
      },
      {
        title: '镀锌角钢',
        icon: 'duxinjiaogang.png',
        deliveryGurantee: true
      },
      {
        title: '工字钢',
        icon: 'gongzigang.png',
        deliveryGurantee: true
      },
    ];
    this.products2 = [
      {
        title: '焊管',
        icon: 'hanguan.png',
        deliveryGurantee: true
      },
      {
        title: '螺旋管',
        icon: 'luoxuanguan.png',
        deliveryGurantee: true
      },
      {
        title: '球墨铸铁管',
        icon: 'qiumozhutieguan.png',
        deliveryGurantee: true
      },
      {
        title: '镀锌方管',
        icon: 'duxinfangguan.png',
        deliveryGurantee: true
      },
    ];
    this.products3 = [
      {
        title: '开平板',
        icon: 'kaipingban.png',
        deliveryGurantee: true
      },
      {
        title: '中厚板',
        icon: 'luoxuanguan.png',
        deliveryGurantee: true
      }
    ];
  }

}
