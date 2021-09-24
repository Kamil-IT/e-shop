import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-line-details',
  templateUrl: './product-line-details.component.html',
  styleUrls: ['./product-line-details.component.scss']
})
export class ProductLineDetailsComponent {

  currency: string = 'PLN';

  @Input()
  product: Product | undefined;

  constructor() { }

}
