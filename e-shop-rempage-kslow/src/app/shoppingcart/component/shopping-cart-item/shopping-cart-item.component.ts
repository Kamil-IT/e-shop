import {Component, Injectable, Input} from '@angular/core';
import {ShoppingCardService, ShoppingCartItem} from "../../service/shopping-card-service";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
@Injectable()
export class ShoppingCartItemComponent {

  @Input()
  shoppingCardItem: ShoppingCartItem | undefined;

  constructor(private shoppingCardService: ShoppingCardService) { }

  onClickMinus() {
    if (this.shoppingCardItem){
      this.shoppingCardService.removeElement(this.shoppingCardItem.product.id);
    }
  }

  onClickPlus() {
    if (this.shoppingCardItem){
      this.shoppingCardService.addElement(this.shoppingCardItem.product.id);
    }
  }
}
