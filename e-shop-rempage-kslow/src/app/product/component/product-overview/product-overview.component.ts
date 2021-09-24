import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product-service";
import {Product} from "../../model/product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent {

  products: Observable<Product[]>;

  constructor(private readonly productService: ProductService) {
    this.products = productService.findAll();
  }

}
