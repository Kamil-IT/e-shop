import {Component, Injectable} from '@angular/core';
import {ShoppingCardService, ShoppingCart} from "../../service/shopping-card-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-cart-overview',
  templateUrl: './shopping-cart-overview.component.html',
  styleUrls: ['./shopping-cart-overview.component.scss']
})
@Injectable()
export class ShoppingCartOverviewComponent {

  shoppingCard : Observable<ShoppingCart>;

  constructor(private shoppingCardService: ShoppingCardService) {
    this.shoppingCard = shoppingCardService.findAll();
  }

}
