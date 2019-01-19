import { Component, OnInit, Input } from '@angular/core';
import { ProductDetail } from '../../../models/product-detail';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input()
  prouctDetail: ProductDetail;
  @Input()
  icon: string;
  constructor() { }

  ngOnInit() {
  }

}
