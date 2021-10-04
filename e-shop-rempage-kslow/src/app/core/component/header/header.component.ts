import {Component, Injectable, OnInit} from '@angular/core';
import {ShoppingCardService, ShoppingCart} from "../../../shoppingcart/service/shopping-card-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@Injectable()
export class HeaderComponent {
  productsInCard: Observable<number>;

  constructor(private readonly shoppingCardService: ShoppingCardService) {
    this.productsInCard = shoppingCardService.productsInCard();
  }

}
